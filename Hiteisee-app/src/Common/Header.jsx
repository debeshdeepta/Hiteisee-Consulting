import React from "react";
import "../Common/Header.css";


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
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
