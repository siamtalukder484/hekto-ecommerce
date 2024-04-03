import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import { Footer } from './Footer'

const MainRootLayout = () => {
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}

export default MainRootLayout