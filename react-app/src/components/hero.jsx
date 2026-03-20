import React from "react";

export default function Hero() {
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
            <button className="btn primary">Explore the Data</button>
            <button className="btn secondary">Contact Us</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
            alt="Earth"
          />
        </div>
      </div>
    </section>
  );
}