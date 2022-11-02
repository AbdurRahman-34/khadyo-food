import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header-area'>
            <div className='nav-main container'>
            <div><img src={logo} alt="" /></div>
            <nav className='nav-menu' >
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/blog'>Blog</Link>
                <Link>Contact Us</Link>
                <Button className='px-4' variant='danger'><b>Login</b></Button>
            </nav>
            </div>
        </div>
    );
};

export default Header;