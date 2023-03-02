import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './login'
import App from './App'
import Home from './home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router
