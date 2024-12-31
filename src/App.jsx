import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'
import Contact from './pages/Contact'
import About from './pages/About'
import AppLayout from './components/layout/AppLayout'
import ErrorPage from './components/UI/ErrorPage'
import CountryDetails from './components/layout/CountryDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
    
      {
        path:"country",
        element:<Country/>
      },

      {
        path:"country/:id",
        element:<CountryDetails/>
      },
    
      {
        path:"about",
        element:<About/>
      },
    
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  },

])


const App = () => {
  return <RouterProvider router={router}>

  </RouterProvider>
}

export default App
