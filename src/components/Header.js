import React from "react";
import logo from "../logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link fw-bold" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/work">Work</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
