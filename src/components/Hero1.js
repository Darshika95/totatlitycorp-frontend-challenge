import React from "react";
import "./Hero1.css";
function Hero1() {
  return (
    <div>
      <div className="hero1">
        <div className="hero1-container">
          <div className="hero1-img">
            <img src="images/ipad.jpg" alt="" />
          </div>
          <div className="description1">
            <h1 className="title1">iPad</h1>
            <p className="subtitle1">Lovable. Drawable. Magical.</p>
            <p className="caption1">Available starting 10.26</p>
            <a href="#" className="btn">
              {"Learn More >"}
            </a>
            <a href="#" className="btn">
              {"Order Now >"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
