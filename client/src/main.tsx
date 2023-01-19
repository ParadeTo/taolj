import React from 'react'
import ReactDOM from 'react-dom/client'
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client'

import App from './App'
import './index.css'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
