import React from 'react'
import AdminNavbar from './navbar'

const Layout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            {children}
        </>
    )
}

export default Layout