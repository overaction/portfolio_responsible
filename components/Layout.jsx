import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
    console.log(children);
    return (
        <div>
            {/* <Navbar /> */}
            {children}
            <Footer />
        </div>
    )
}

export default Layout
