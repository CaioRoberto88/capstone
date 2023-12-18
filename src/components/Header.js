import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header id="/">
      <div className="div1">
        <h1>Little Lemon</h1>
        <h2>Chicargo</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on tradicional
          recipes served with a modern twist.
        </p>
        <a
          className="btn-reserve-table"
          aria-label="On Click"
          href="bookingPage"
        >
          Reserve a Table
        </a>
      </div>
      <div className="div2">
        <img src="restauranfood.png" alt="restaurant food" />
      </div>
    </header>
  );
};

export default Header;
