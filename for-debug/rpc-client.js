const path = require('path')

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync(
  [
    path.resolve(__dirname, '../proto/item.proto'),
    path.resolve(__dirname, '../proto/user.proto'),
  ],
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
)
const item = grpc.loadPackageDefinition(packageDefinition).item
const user = grpc.loadPackageDefinition(packageDefinition).user

// const clientItem = new item.ItemService(
//   'localhost:9001',
//   grpc.credentials.createInsecure()
// )

// clientItem.findOne({id: 1}, function (err, response) {
//   console.log('====================================')
//   console.log(err)
//   console.log('====================================')
//   console.log('findOne: ', response)
// })

// clientItem.getItems({page: 1, pageSize: 10}, function (err, response) {
//   console.log('getItems: ', response)
// })

const clientUser = new user.UserService(
  'localhost:9003',
  grpc.credentials.createInsecure()
)

// clientUser.login({username: 'ayou', password: 1}, function (err, response) {
//   console.log('====================================')
//   console.log(err)
//   console.log('====================================')
//   console.log('login: ', response)
//   clientUser.verify(response, function (err, response) {
//     console.log('====================================')
//     console.log(err)
//     console.log('====================================')
//     console.log('verify: ', response)
//   })
// })

clientUser.signup(
  {username: 'ayou', password: 'youxingzhi'},
  function (err, response) {
    console.log('====================================')
    console.log(err)
    console.log('====================================')
    console.log('signup: ', response)
    // clientUser.verify(response, function (err, response) {
    //   console.log('====================================')
    //   console.log(err)
    //   console.log('====================================')
    //   console.log('verify: ', response)
    // })
  }
)
