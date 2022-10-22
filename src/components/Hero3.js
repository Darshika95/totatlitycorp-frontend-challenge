import React from "react";
import "./Hero3.css";
function Hero3() {
  return (
    <div className="hero3">
      <div className="hero3-container">
        <div className="hero3-img">
          <img src="images/tv-4k.jpg" alt="" />
        </div>
        <div className="description3">
          <p className="subtitle3">
            The Apple experience. Cinematic in every sense.
          </p>
          <p className="caption3">Available starting 11.4</p>
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

export default Hero3;
