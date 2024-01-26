import React from "react";
import "./MaidHome.css"; // Import the MaidHome.css stylesheet

import LogoWhite from "./AgenKlik WhiteLogo.png";

export default function Header() {
  return (
    <nav>
      <div className="navbar">
        <div className="menu-toggle" id="mobile-menu">
          <ul className="dropdown-menu-mobile">
            <ul className="dropdown-menu-mobile-input"><a href="#/home">Home</a></ul>
            <ul className="dropdown-menu-mobile-input"><a href="#/about">About</a></ul>
            <ul className="dropdown-menu-mobile-input"><a href="#/hiring">Hiring</a></ul>
            <ul className="dropdown-menu-mobile-input"><a href="#/contact-us">Contact Us</a></ul>
          </ul>
        </div>

        <ul className="nav-list">
          <li><a href="#/">Home</a></li>
          <li><a href="#/about">About</a></li>
          <li className="dropdown">
            <a href="#/services">Services</a>
            <ul className="dropdown-menu">
              <li><a href="#/pembantu">Pembantu</a></li>
              <li><a href="#/supir">Supir</a></li>
              <li><a href="#/baby-sitter">Baby sitter</a></li>
              <li><a href="#/perawat-lansia">Perawat Lansia</a></li>
              <li><a href="#/penajak-hewan">Penajak Hewan</a></li>
              <li><a href="#/tukang-kebun">Tukang Kebun</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#/contact">Contact</a>
            <ul className="dropdown-menu">
              <li><a href="#/hiring">Hiring</a></li>
              <li><a href="#/contact-us">Contact Us</a></li>
            </ul>
          </li>

          <div className="Login">
            {/* Add your login component or content here */}
          </div>
        </ul>
      </div>
    </nav>
  );
}
