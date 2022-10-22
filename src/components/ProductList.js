import React from "react";
import { data } from "../data";
import Product from "./Product";
import "./ProductList.css";
function ProductList() {
  return (
    <div className="container">
      {data.items.map((item) => {
        return (
          <Product
            theme={item.theme}
            fontTheme={item.fontTheme}
            title={item.title}
            subtitle={item.subtitle}
            buyText={item.buyText}
            img={item.img}
          />
        );
      })}
      {/* <Product title="iPhone 14 Pro" subtitle="" buyText="" img="" />
      <Product title="" subtitle="" buyText="" img="" />
      <Product title="" subtitle="" buyText="" img="" />
      <Product title="" subtitle="" buyText="" img="" /> */}
    </div>
  );
}

export default ProductList;
