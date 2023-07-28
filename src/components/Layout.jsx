import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export const Layout = ({children, cartItem}) => {
  return (
    <div>
        <Navbar cartItems = {cartItem} />
            <div>{children}</div>
        <Footer />
    </div>
  )
}