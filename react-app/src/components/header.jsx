import React from "react";

function Header({ onExploreClick, onContactClick }) {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">🪐 planet</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Planets</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;