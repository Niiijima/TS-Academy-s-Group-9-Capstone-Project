import React from "react";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="video-wrapper">
        <div className="planetry-data-text">
           <h2>How Planetary Data Helps Us Understand Space</h2>
           <p className="subtitle">Planetary science goes beyond 
                images. Comparing mass, diameter, gravity, and density, 
                we gain insight into how planets form, behave, and interact
                within the solar system.</p>
        </div>

       

        <div className="video-card">

          <video controls poster="https://images.unsplash.com/photo-1454789548928-9efd52dc4031">
           <source src="planet.mp4" type="video/mp4" />
         </video>
        </div>

      </div>
      {/* Embedded CSS */}
      <style>{`
        .video-section {
          padding: 3rem 1rem;
          background: #ffffff;
          color: #fff; 
          text-align: center;
        }

        .video-section h2 {
          font-size: 1.7rem;
          margin-bottom: 1rem;
        }

        .video-wrapper {
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         gap: 2rem;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          .video-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem; 
            align-items: start;
            order: -1;         
          }
        }

        .video-section .subtitle {
          font-size: 1rem;
          margin-bottom: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .video-card {
          max-width: 900px;
          margin: 20px auto;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .video-card video {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Tablet */
        @media (max-width: 768px) {
          .video-section h2 {
            font-size: 2rem;
          }

          .video-section .subtitle {
            font-size: 1rem;
            padding: 0 1rem;
          }

          .video-card {
            width: 95%;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .video-section h2 {
            font-size: 1.3rem;
          }

          .video-section .subtitle {
            font-size: 0.95rem;
          }

          .video-card {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}