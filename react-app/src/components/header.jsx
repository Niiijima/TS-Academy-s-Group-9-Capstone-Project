//header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">🪐 planet</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Planets</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
}