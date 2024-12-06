import React from 'react'
import './router.css'
// import Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Info from './Info';
import About from './About';
import ErrorPage from './ErrorPage';
import Location from './Location';
import Form from './Form';
function RouterDemo2() {
    return (
        <Router>
            <Routes>
                {/* linking Components */}
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/info' element={<Info />} />
                <Route path='/contact' element={<Contact />} >
                    {/* Child/Nested Route of Contact*/}
                    {/* <Route path='/location' element={<Location />} /> */}
                    <Route path='location' element={<Location />} />
                    {/* <Route path='/form' element={<Form />} /> */}
                    <Route path='form' element={<Form />} />
                </Route>
                {/* Error page route if invalid path enter user */}
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default RouterDemo2
