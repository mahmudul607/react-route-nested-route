import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Posts from './components/Posts/Posts.jsx';
import Users from './components/Users/Users.jsx';
import Home from './components/Home/Home.jsx';
import Details from './components/Details/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Home/>,
    children: [
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/posts',
        element: <Posts/>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/users',
        element: <Users/>,
        loader : () => fetch('https://jsonplaceholder.typicode.com/users'),
        
      },
      {
        path: '/users/:userId',
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <Details></Details>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(

  
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
