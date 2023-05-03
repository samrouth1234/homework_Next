import React from 'react'
import NavbarComponent from './NavbarComponent'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
      <NavbarComponent/>
      <main>
            {children}
      </main>
      <Footer/>
    </>
  )
}
