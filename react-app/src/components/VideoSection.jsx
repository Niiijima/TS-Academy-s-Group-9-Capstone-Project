import React from "react";

export default function VideoSection() {
  return (
    <section className="video-section">
      <div className="container">
        <h2>How Planetary Data Helps Us Understand Space</h2>

        <p className="subtitle">
          Comparing <span>mass, diameter, gravity,</span> and <span>density</span> helps us understand how planets form and behave.
        </p>

        <div>
          {/* First Video */}
          <video className="video-card" autoPlay muted loop controls>
            <source
              src="https://www.pexels.com/download/video/36029081/"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Second Video */}
          <div className="video-card">
            <video
              controls
              poster="https://images.unsplash.com/photo-1454789548928-9efd52dc4031"
            >
              <source src="planet.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .video-section {
          padding: 3rem 1rem;
          background: #0f3f7f;
          color: #fff;
          text-align: center;
        }

        .video-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .video-section .subtitle {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          color: #ffffff;
        }

        .video-card {
          max-width: 900px;
          width: 100%;
          margin: 1rem auto;
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
            font-size: 1.5rem;
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