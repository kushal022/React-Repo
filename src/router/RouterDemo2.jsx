import React from 'react'
// import Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Info from './Info';
import About from './About';
function RouterDemo2() {
    return (
        <Router>
            <Routes>
                {/* linking Components */}
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/info' element={<Info />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default RouterDemo2
