import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="div1">
        <h1>Little Lemon</h1>
        <h2>Chicargo</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on tradicional
          recipes served with a modern twist.
        </p>
        <a className="btn-reserve-table" href="reserveATable">
          Reserve a Table
        </a>
      </div>
      <div className="div2">
        <img src="restauranfood.jpg" alt="" />
      </div>
    </header>
  );
};

export default Header;
