import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Travel Nepal</div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/packages">Browse Tours</Link></li>
        
        <li><Link to="/join-agent">Join as Travel Agent</Link></li>

        <li><Link to="/login">Log in / Sign up</Link></li>
        
        
      </ul>
    </nav>
  );
};

export default Navbar;
