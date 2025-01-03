import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouterDemo = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>Home Page</h1>} />
                <Route path='/about' element={<h1>About Page</h1>} />
                <Route path='/info' element={<h1>Info Page</h1>} />
                <Route path='/contact' element={<h1>Contact Page</h1>} />
                <Route path='/login' element={<h1>Login Page</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterDemo
