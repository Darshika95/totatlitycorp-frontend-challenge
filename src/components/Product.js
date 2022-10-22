import React from "react";
import "./Product.css";
function Product({ theme, fontTheme, title, subtitle, buyText, img }) {
  return (
    <div className="product">
      <div className={`product-item ${theme}`}>
        <div className="description">
          <h1 className={`title ${fontTheme}`}>{title}</h1>
          <p className={`subtitle ${fontTheme}`}>{subtitle}</p>
          <a href="#" className="btn">
            {"Learn More >"}
          </a>
          <a href="#" className="btn">
            {buyText}
          </a>
        </div>
        <div className="product-image">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Product;
