import React, { useState } from "react";
import "../index.css";
import logoImage from "../assets/Combined Shape.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoImage} alt="logo" />
          <span className="logo-text">Design Daily</span>
        </div>

        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-list ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          
          <li>
            <a href="#" className="nav-link design-btn">
              Free Design
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              License
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Articles
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contributors
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
        </div>
        <div className="navbar-auth">
        <button className="login-btn">
          Log in
        </button>
        <button className="sign-btn">
          Sign Up
        </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
