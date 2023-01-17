const path = require('path')

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

const client1 = new item.ItemService(
  'localhost:9001',
  grpc.credentials.createInsecure()
)

client1.findOne({id: 1}, function (err, response) {
  console.log('Found one item: ', response)
})

client1.findOneWithOrder({id: 1}, function (err, response) {
  console.log('Found one item with order: ', response)
})

const clientOrder = new order.OrderService(
  'localhost:9002',
  grpc.credentials.createInsecure()
)
clientOrder.findOne({id: 1}, function (err, response) {
  console.log('Found one order: ', response)
})
clientOrder.findOneWithItem({id: 1}, function (err, response) {
  console.log('Found one order with item: ', response)
})
