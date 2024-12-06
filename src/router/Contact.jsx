import React from 'react'
import Header from './Header'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
    return (
        <div>
            <Header />
            <h1>Inside Contact Component</h1>
            <Link to='location'>Search Location</Link>
            <br />
            <Link to='form'>Fill Form</Link>
            {/* <Outlet /> Require/ must must */}
            <Outlet />
        </div>
    )
}

export default Contact
