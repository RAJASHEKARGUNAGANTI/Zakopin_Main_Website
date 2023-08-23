import React from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css'
import LOGO from '../../images/logo.png'

function Navbar(){
    return (
    <div className='NavigationBar'>
        <div className="logo">
            <img src={LOGO} alt="logo" />
        </div>
        <div className="navList">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to= "/services">Services</Link></li>
                <li><Link to ="#">Testimonials</Link></li>
                <li><Link to = "#">Contact</Link></li>
                <li><Link to = "#">About</Link></li>
            </ul>
        </div>
    </div>
    )
}
export default Navbar;