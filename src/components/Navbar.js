import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Sawai Trekkers</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/viewed-forts">Viewed Forts</Link></li>
        <li><Link to="/upcoming-treks">Upcoming Treks</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
