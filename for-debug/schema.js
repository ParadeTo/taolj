const path = require('path')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLSchema,
} = require('graphql')
const graphqlFields = require('graphql-fields')

const itemProtoPath = path.resolve(__dirname, '../proto/item.proto')
const orderProtoPath = path.resolve(__dirname, '../proto/order.proto')

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync(
  [itemProtoPath, orderProtoPath],
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
)
const item = grpc.loadPackageDefinition(packageDefinition).item
const order = grpc.loadPackageDefinition(packageDefinition).order

const clientItem = new item.ItemService(
  'localhost:9001',
  grpc.credentials.createInsecure()
)

const clientOrder = new order.OrderService(
  'localhost:9002',
  grpc.credentials.createInsecure()
)

const Item = new GraphQLObjectType({
  name: 'item',
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
  },
})

const Order = new GraphQLObjectType({
  name: 'order',
  fields: {
    id: {
      type: GraphQLInt,
    },
    price: {
      type: GraphQLFloat,
    },
    createTime: {
      type: GraphQLInt,
    },
    items: {type: new GraphQLList(Item)},
  },
})

const RootQueries = new GraphQLObjectType({
  name: 'rootQuery',
  fields: {
    items: {
      type: new GraphQLList(Item),
      args: {
        page: {
          type: GraphQLInt,
        },
        pageSize: {
          type: GraphQLInt,
        },
      },
      resolve: async (_, args, a, b) => {
        return new Promise((resolve, reject) => {
          clientItem.getItems({page: 1, pageSize: 1}, (err, rsp) => {
            resolve((rsp && rsp.list) || [])
          })
        })
      },
    },
    order: {
      type: Order,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: async (root, args, context, info) => {
        const fields = graphqlFields(info)
        console.log(fields)
        return new Promise((resolve) => {
          let order
          clientOrder.findOne(args, async (err, rsp) => {
            order = rsp
            if (fields.hasOwnProperty('items')) {
              const promises = []
              // Get items info of a order
              for (let i = 0; i < rsp.itemIds.length; i++) {
                const itemId = rsp.itemIds[i]
                console.log(itemId)

                promises.push(
                  new Promise((resolve) => {
                    clientItem.findOne({id: itemId}, (err, rsp) => {
                      resolve(rsp)
                    })
                  })
                )
              }
              const items = await Promise.all(promises)
              order.items = items
              resolve(order)
              return
            }
            resolve(order)
          })
        })
      },
    },
  },
})

const schema = new GraphQLSchema({
  query: RootQueries,
  types: [Item, Order],
})

module.exports = schema
