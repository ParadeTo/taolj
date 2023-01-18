const path = require('path')
const express = require('express')
const expressGraph = require('express-graphql')
const {graphqlHTTP} = expressGraph

const schema = require('./schema') // import the schema that was created with the root query

const app = express()
const PORT = 4000

// use the endpoint '/graph' and configure a graphql middleware to handle graphql requests
app.use(
  '/graph',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

// start the express server on the defined port
app.listen(PORT, () => {
  console.log(`Graph QL API is up and running on Port ${PORT}`)
})
