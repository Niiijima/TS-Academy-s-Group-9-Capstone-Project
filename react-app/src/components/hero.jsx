import React from "react";

export default function Hero({ onExploreClick, onContactClick }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>Explore Our Solar System Through Data</h1>
          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density.
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={onExploreClick}>
              Explore the Data
            </button>
            <button className="btn secondary" onClick={onContactClick}>
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
            alt="Earth"
          />
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`
        .hero {
          padding: 4rem 2rem;
          background: linear-gradient(to right, #0f3f7f, #1b5fa7);
          color: #fff;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-text h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .hero-text p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.8rem 1.8rem;
          font-size: 1rem;
          font-weight: bold;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn.primary {
          background: linear-gradient(45deg, #ff6ec4, #7873f5);
          color: #fff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .btn.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        .btn.secondary {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.3);
          backdrop-filter: blur(10px);
        }

        .btn.secondary:hover {
          background: rgba(255,255,255,0.25);
          transform: translateY(-3px);
        }

        .hero-image img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-buttons .btn {
            width: 100%;
            max-width: 250px;
          }

          .hero-image {
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
}