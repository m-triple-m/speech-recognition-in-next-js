import React from 'react'
import Navbar from './navbar';

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default MainLayout;