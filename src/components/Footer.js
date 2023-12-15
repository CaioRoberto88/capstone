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
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
          <li>
            <a href="menu">Menu</a>
          </li>
          <li>
            <a href="reservations">Reservations</a>
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
        <p>Address: [Endereço]</p>
        <p>Phone Number: [Número de telefone]</p>
        <p>Email: [Email]</p>
      </div>
      <div className="social-media-links">
        <h2>Social Media Links</h2>
        <p>[Ícones ou links de mídia social]</p>
      </div>
    </footer>
  );
};

export default Footer;
