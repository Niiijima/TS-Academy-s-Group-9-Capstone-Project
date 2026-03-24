import React from "react";

function Header({ onExploreClick, onContactClick }) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">🪐MyPlanetApp</div>
        <ul className="nav-links">
          <li>
            <button className="btn-gradient" onClick={onExploreClick}>
              Explore the Data
            </button>
          </li>
          <li>
            <button className="btn-glass" onClick={onContactClick}>
              Contact Us
            </button>
          </li>
        </ul>
      </nav>

      {/* Embedded CSS */}
      <style>{`
        .header {
          position: sticky;
          top: 0;
          width: 100%;
          background: #0f3f7f;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .nav {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          color: #fff;
        }

        .logo {
          font-weight: bold;
          font-size: 1.2rem;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 1rem;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          display: flex;
        }

        /* Buttons */
        .btn-gradient {
          padding: 0.8rem 1.8rem;
          font-size: 1.1rem;
          font-weight: bold;
          border: none;
          border-radius: 50px;
          background: linear-gradient(45deg, #ff6ec4, #7873f5);
          color: #fff;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: all 0.3s ease;
        }
        .btn-gradient:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        .btn-glass {
          padding: 0.8rem 1.6rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
          color: #fff;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-glass:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-3px);
        }

        /* Responsive for mobile */
        @media (max-width: 768px) {
          .nav {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            flex-direction: column;
            width: 100%;
            gap: 0.5rem;
            margin-top: 0.5rem;
          }

          .nav-links li {
            width: 100%;
          }

          .btn-gradient, .btn-glass {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;