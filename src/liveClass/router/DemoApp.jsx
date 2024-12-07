import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
// import Navigate from './Navigate'
import Error from './Error'

function DemoApp() {
    return (
        <>
            {/* <Navigate /> */}
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </>
    )
}

export default DemoApp
