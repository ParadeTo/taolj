const express = require('express')
const {graphqlHTTP} = require('express-graphql')

const schema = require('./schema')

const app = express()
const PORT = 4000

app.use(
  '/graph',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

app.listen(PORT, () => {
  console.log(`Graph QL API is up and running on Port ${PORT}`)
})
