import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
    <ul className="navbar">
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/">Work</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <a href="https://www.instagram.com/">Instagram</a>
      </li>
    </ul>
  </nav>
  );
};

export default NavBar;
