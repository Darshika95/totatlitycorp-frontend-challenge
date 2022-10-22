import React, { useEffect, useState } from "react";
import { data } from "../data";
import "./Carousel.css";
function Carousel() {
  const [index, setIndex] = useState(0);

  const carouselClassName = (currIndex) => {
    if (currIndex == index) {
      return "carousel-box curr";
    } else {
      return "carousel-box prev";
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          transform: `translate3d(${-index * 1281}px, 0, 0)`,
        }}
      >
        {data.series.map((item, i) => {
          return (
            <div className={carouselClassName(i)} onClick={() => setIndex(i)}>
              <img src={item.seriesImg} alt="" />
            </div>
          );
        })}
      </div>
      <div className="carousel-nav">
        {data.series.map((item, i) => {
          return (
            <div
              className={`${i == index ? "dot active" : "dot"}`}
              onClick={() => setIndex(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
