import React from "react";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <input type="checkbox" name="" id="toggler" />
      <label for="toggler" class="fas fa-bars"></label>
      <div class="logo">
        <div className="apple-logo"></div>
      </div>
      <nav className="navbar">
        <a href="#">Store</a>
        <a href="#">Mac</a>
        <a href="#">iPad</a>
        <a href="#">iPhone</a>
        <a href="#">Watch</a>
        <a href="#">AirPods</a>
        <a href="#">TV & Home</a>
        <a href="#">Only on Apple</a>
        <a href="#">Accessories</a>
        <a href="#">Support</a>
      </nav>
      <div class="logo searchicon">
        <div className="search-icon"></div>
      </div>
      <div class="logo">
        <div className="bag-icon"></div>
      </div>
    </header>
  );
}

export default Header;
