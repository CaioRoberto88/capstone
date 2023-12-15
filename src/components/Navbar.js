import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="logo.svg" alt="logo" />
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex m-auto">
            <li className="nav-item">
              <a className="nav-link" href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="reservations">
                Reservations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="orderOnline">
                Order Online
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
