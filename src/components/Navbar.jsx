import React from 'react'
import "./Navbar.css"

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>

    <div className="navbar">
        <div className="logo">
            <h2>Travelista</h2>
        </div>
        
        <div className="menu">
            
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/destination">Destination</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        
        <Link to="/login" className="login-btn">Login</Link>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Navbar