import React from 'react'
import { Link } from 'react-router-dom'
function Navigate() {
    return (
        <div>
            <Link to='/home' >home  </Link><br />
            <Link to='/contact' >Contact  </Link><br />
            <Link to='/about' >About</Link><br />
        </div>
    )
}

export default Navigate
