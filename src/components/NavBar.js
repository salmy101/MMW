import React, {useState} from "react";
import logo from "./images/logo.png"
import { FaBars, FaTimes } from "react-icons/fa";

import "./NavBar.css"


const NavBar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click) //the opposite of what it is
  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
         <h1> LOGO</h1>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ?( <FaTimes size={30}/> ): (<FaBars size={30}/>) }
          
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href='/'>Home</a>
          </li>
          <li className="nav-item">
            <a href='/about'>About</a>
          </li>
          <li className="nav-item">
            <a href='/'>Resources</a>
          </li>
          <li className="nav-item">
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
