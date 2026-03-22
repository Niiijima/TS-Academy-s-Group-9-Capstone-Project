// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer" style={{ border: "2px solid red", marginTop: "2rem" }}>
      <div className="container footer-content">
        <p>© 2026 TS ACADEMY Group Capstone Project. All rights reserved</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
