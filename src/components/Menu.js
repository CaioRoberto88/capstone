import React from "react";

import "./Menu.css";

const Menu = () => {
  return (
    <section id="menu">
      <h2 className="title-week">This week's Specials!</h2>
      <a className="menu-link" href="onlineMenu">
        Online Menu
      </a>
      <div className="card-container">
        <div className="card-dinner">
          <img src="greek salad.jpg" alt="" />
          <h6>Greek Salad</h6>
          <span className="price">$12.99</span>
          <p>
            The famous greek salad of crispy letture, peppers, olives and our
            Chicargo style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <span className="orderDelivery">Order a delivery 44</span>
        </div>
        <div className="card-dinner">
          <img src="bruchetta.png" alt="" />
          <h6>Bruschetta</h6>
          <span className="price">$5.99</span>
          <p>
            Our Bruschetta is made from grilled brand that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <span className="orderDelivery">Order a delivery 44</span>
        </div>
        <div className="card-dinner">
          <img src="lemon dessert.jpg" alt="" />
          <h6>Lemmon Dissert</h6>
          <span className="price">5.00</span>
          <p>
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <span className="orderDelivery">Order a delivery 44</span>
        </div>
      </div>
    </section>
  );
};

export default Menu;
