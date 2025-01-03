import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Ancor tag: Home</a>
                                <Link to='/' className="nav-link " aria-current="page">Link tag: Home</Link>
                                <NavLink to='/' className="nav-link " aria-current="page">NavLink tag: Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Ancor tag: Contact</a>
                                <Link to='/contact' className="nav-link " aria-current="page">Link tag: Contact</Link>
                                <NavLink to='/contact' className="nav-link " aria-current="page">NavLink tag: Contact</NavLink>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">Ancor tag: About</a>
                                <Link to='/about' className="nav-link " aria-current="page">Link tag: About</Link>
                                <NavLink to='/about' className="nav-link " aria-current="page">NavLink tag: About</NavLink>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/info">Ancor tag: Info</a>
                                <Link to='/info' className="nav-link " aria-current="page">Link tag: Info</Link>
                                <NavLink to='/info' className="nav-link " aria-current="page">NavLink tag: Info</NavLink>

                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav >
            {/* <h1>Inside Header Component</h1> */}
        </div>
    )
}

export default Header
