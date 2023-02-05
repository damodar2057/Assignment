import React from 'react'
import {RouterProvider, createBrowserRouter, Outlet,} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Single from './pages/Single'
import Write from './pages/Write'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './style.scss'

const Layout=()=>{
  return(
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
const App = () => {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[{
        path:'/',
        element:<Home />,
      },
      {
        path:'/post/:id',
        element:<Single />,
      },
      {
        path:'/write',
        element:<Write />
      }
    ]

    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/register',
      element:<Register />
    },
    {
      path:'/single',
      element:<Single />
    },
    {
      path:'/write',
      element:<Write />
    },
  ])
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
      
    </div>
  )
}

export default App
