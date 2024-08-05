import React from "react";
import "../Common/Header.css";
import { Link } from "react-router-dom";


export const Header = () => {
      
    return (
    <div>
      <div className="top-logo">
        <div className="header-logo">
          <img src="/HiteiseeLogo.png" alt="Logo" />
        </div>

       

        <header className="header">
          <nav className="navbar">
            <ul className="navbar-links">
              <li > 
             <Link to="/">Home</Link>
              </li>
             
              <li>
              <Link to="/services">Services</Link>
              </li>
              <li>
              <Link to="/careers">Career</Link>
              </li>
              <li>
              <Link to="/BlogPage">Blog</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
              <li >
                <Link to="/about">About Us</Link> 
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
