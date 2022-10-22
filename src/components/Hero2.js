import React from "react";
import "./Hero2.css";
function Hero2() {
  return (
    <div className="hero2">
      <div className="hero2-container">
        <div className="hero2-img">
          <img src="images/ipad-pro.jpg" alt="" />
        </div>
        <div className="description2">
          <h1 className="title2">iPad Pro</h1>
          <p className="subtitle2">Lovable. Drawable. Magical.</p>
          <p className="caption2">Available starting 10.26</p>
          <a href="#" className="btn">
            {"Learn More >"}
          </a>
          <a href="#" className="btn">
            {"Order Now >"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
