import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <img src="logo.png" alt="logo" />
      </div>
      <div className="gourmet-navigation">
        <h2>Gourmet Navigation</h2>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="bookingPage">Reservations</a>
          </li>
          <li>
            <a href="orderOnline">Order Online</a>
          </li>
          <li>
            <a href="login">Login</a>
          </li>
        </ul>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <p><i className="bi bi-signpost"></i> Street N° 12, bolevard beach - MA.</p>
        <p><i className="bi bi-telephone"></i> (99)-99999-9999</p>
        <p><i className="bi bi-envelope-at"></i> littleLemon@.com</p>
      </div>
      <div className="social-media-links">
        <h2>Social Media Links</h2>
        <p><a href="/" target="_blank"><i className="bi bi-facebook"></i> Our Facebook</a></p>
        <p><a href="/" target="_blank"><i className="bi bi-instagram"></i> Our Instagram</a></p>
        <p><a href="/" target="_blank"><i className="bi bi-twitter-x"></i> Our X / Old Twitter</a></p>
      </div>
    </footer>
  );
};

export default Footer;
