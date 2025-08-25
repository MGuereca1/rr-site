import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './components/Contact'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='services' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App