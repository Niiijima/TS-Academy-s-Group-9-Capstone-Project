//hero.jsx
import React from "react";

export default function Hero({ onExploreClick, onContactClick }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h1>Explore Our Solar System Through Data</h1>
          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the solar system 
            in a way that's easy to grasp. Whether you're a student, educator, or just curious 
            about space, our data-driven approach will help you see the planets in a whole new light. 
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
          <img src="/images/hero.png" alt="Solar System" className="solar" />
        </div>
      </div>

      {/* Embedded CSS */}
      <style>{`

         
          .hero {
            padding: 1rem;
            background: linear-gradient(to right, #01183c, #01183c);
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

          @media (max-width: 768px) {
            .hero-text h1 {
              font-size: 1.8rem;
            }
          }

          .hero-text p {
            font-size: 0.8rem;
            margin-bottom: 2rem;
            line-height: 1.5;
            color: #DDDDDD;
          }

          .hero-buttons {
            display: flex;
            gap: 1rem;
          }

          .btn {
            padding: 0.8rem 1.8rem;
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

          .btn.secondary {
            background: rgba(255,255,255,0.1);
            color: #fff;
            border: 1px solid rgba(255,255,255,0.3);
            backdrop-filter: blur(10px);
          }

          .hero-image img {
            width: 100%;
          }

          /* Responsive */
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr;
              text-align: center;
            }

            .hero-image {
              order: -1;
              margin-bottom: 1rem;
            }

            .hero-buttons {
              flex-direction: column;
              align-items: center;
            }

            .hero-buttons .btn {
              width: 100%;
              max-width: 250px;
            }
          }
`}</style>
    </section>
  );
}