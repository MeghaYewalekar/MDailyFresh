import React from 'react'
import Home from './components/home/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Fruits from './pages/Fruits'
import Dairy from './pages/Dairy'
import SeaFood from './pages/SeaFood'
import Allproducts from './pages/Allproducts'
import Layout from './components/Layout'


const App=()=> {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
      path:"/",
      element:<Home />
    },
        {
      path:"/fruits",
      element:<Fruits />
    },
    {
      path:"/dairy",
      element:<Dairy />
    },
    {
      path:"/seafood",
      element:<SeaFood />
    },
    {
      path:"/allproducts",
      element:<Allproducts />
    }
      ]
    }
    
    
  ])
  return <RouterProvider router={router}/>

}

export default App