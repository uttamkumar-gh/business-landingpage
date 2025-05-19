import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function Header() {
  return (
    <header className='site-header'>
        <div className="container">
            <div className="site-name-logo">
                <Link to='/'>Business</Link>
            </div>
            <div className="site-nav-items">
                <ul className="nav-items">
                    <li className='nav-item'>
                        <Link to='/'>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/'>Our Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/'>Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/'>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/'>Contact</Link>
                    </li>
                    <li className="nav-button">
                        <Button to='/'>Get in Touch</Button>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
