// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer" style={{ border: "2px solid red", marginTop: "2rem" }}>
      <div className="container footer-content">
        <p>© 2026 TS ACADEMY Group Capstone Project. All rights reserved</p>
        <div className="footer-links">
                    <a href="https://github.com/Anurella" target="_blank" rel="noopener noreferrer">
            Amaka-Github
          </a>
          <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer">
            Ifeoma-LinkedIn
          </a>
          <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer">
            TS Academy
          </a>
          <a href="https://github.com/Niiijima/TS-Academy-s-Group-9-Capstone-Project.git" target="_blank" rel="noopener noreferrer">
            Group 9 GitHub Repository
          </a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}
