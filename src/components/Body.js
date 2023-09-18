import React from 'react'
import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'

export default function Body() {
   const appRouter = createBrowserRouter([
      {
         path:"/",
         element:<Login/>
      },
      {
         path:"/browse",
         element:<Browse/>
      },
   ])
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}