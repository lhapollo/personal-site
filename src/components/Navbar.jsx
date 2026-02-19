import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <ul className="font-mono text-white">
          <li className="p-4">
            <Link to="/" className="text-xl md:text-2xl lg:text-3xl">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link to="/about" className="text-xl md:text-2xl lg:text-3xl">
              About
            </Link>
          </li>
          <li className="p-4">
            <Link to="/projects" className="text-xl md:text-2xl lg:text-3xl">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
