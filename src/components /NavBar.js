import React from "react";
import logo from "./images/logo.png"
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavBar.css"



const NavBar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
         {/* <img src={logo} alt='logo'></img> */}
         <h1> LOGO</h1>
        </a>
        <div className="hamburger">
          <FaBars />
        </div>
        <ul className='nav-menu'>
          <li className="nav-item">
            <a href='/'>Home</a>
          </li>
          <li className="nav-item">
            <a href='/'>About</a>
          </li>
          <li className="nav-item">
            <a href='/'>Resources</a>
          </li>
          <li className="nav-item">
            <a href='/'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
