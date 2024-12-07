import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import DemoApp from './DemoApp'
function AppRouter() {
    return (
        <BrowserRouter>
            <DemoApp />
        </BrowserRouter>
    )
}

export default AppRouter
