const path = require('path')

const PROTO_PATH = path.resolve(__dirname, '../proto/item.proto')

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})
const item = grpc.loadPackageDefinition(packageDefinition).item

const clientItem = new item.ItemService(
  'localhost:9001',
  grpc.credentials.createInsecure()
)

clientItem.findOne({id: 1}, function (err, response) {
  console.log('findOne: ', response)
})

clientItem.getItems({page: 1, pageSize: 10}, function (err, response) {
  console.log('getItems: ', response)
})
