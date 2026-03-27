// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="center-text">
          © 2026 TS ACADEMY Group Capstone Project. All rights reserved
        </p>
      </div>

      <hr />

      <div className="footer-links">
        <a href="https://github.com/Anurella" target="_blank" rel="noopener noreferrer">
          Amaka-Github
        </a>
        <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer">
          Ifeoma-LinkedIn
        </a>
        <a href="https://github.com/el-klaus" target="_blank" rel="noopener noreferrer">
          James Nicholas - Github
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

      {/* ✅ FIXED STYLE */}
      <style>{`
        .footer {
          background: #051540;
          color: #ffffff;
          padding: 2rem 1rem;
          text-align: center;
        }

        /* Center align the copyright text and make it white */
        .footer .center-text {
          text-align: center;
          margin: 0 auto 1rem auto;
          font-size: 0.95rem;
          color: #ffffff; /* white text */
        }

        hr {
          width: 90%;
          margin: 50px auto;
          border: 0.5px solid #ffffff33;
        }

        .footer-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }

        .footer-links a {
          color: #ffffff; /* white text */
          text-decoration: none;
          font-size: 0.9rem;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </footer>
  );
}