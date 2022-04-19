import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {GoHome} from 'react-icons/go'
import './NavbarStyle.css'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const pathMatchRoute = (route) => {
        if (route === location.pathname)
        return true
    }
    return (
        <footer className='navbar'>
            <nav className='navbar-nav'>
                <ul className='navbar-ul'>
                    <li className='navbar-item' onClick={() => navigate('/')}>
                        <GoHome className='navbar-icon' />
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Navbar