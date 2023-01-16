const path = require('path')

const heroProtoPath = path.resolve(__dirname, '../proto/hero.proto')
const orderProtoPath = path.resolve(__dirname, '../proto/order.proto')

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync(
  [heroProtoPath, orderProtoPath],
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
)
const hero = grpc.loadPackageDefinition(packageDefinition).hero
const order = grpc.loadPackageDefinition(packageDefinition).order

const client1 = new hero.HeroesService(
  'localhost:3002',
  grpc.credentials.createInsecure()
)

client1.findOne({id: 1}, function (err, response) {
  console.log('Found: ', response)
})

const clientOrder = new order.OrderService(
  'localhost:9001',
  grpc.credentials.createInsecure()
)
clientOrder.findOne({id: 1}, function (err, response) {
  console.log('Found: ', response)
})
