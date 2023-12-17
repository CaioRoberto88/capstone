import React from "react";

import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-section">
          <h2>Little Lemon</h2>
          <h6>Chicago</h6>
          <p>
            Little Lemon is charming neighborhood bistro thatserves simples food
            and classic cocktails in a livery but casual enviroment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
        </div>
        <div className="image-section">
          <div className="image shadow-lg"></div>
          <div className="image image-overlap shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
