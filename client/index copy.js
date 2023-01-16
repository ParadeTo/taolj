const path = require('path')

const PROTO_PATH = path.resolve(__dirname, '../proto/hero.proto')

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
})
const hero = grpc.loadPackageDefinition(packageDefinition).hero

const client1 = new hero.HeroesService(
  'localhost:3002',
  grpc.credentials.createInsecure()
)

client1.findOne({id: 1}, function (err, response) {
  console.log('Found: ', response)
})
