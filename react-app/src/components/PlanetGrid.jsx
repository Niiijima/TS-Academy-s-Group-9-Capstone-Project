import { useEffect, useState } from "react";

function PlanetGrid() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("/planets.json")
      .then((res) => res.json())
      .then((data) => setPlanets(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="planet-grid">
      <section className="section light-bg">
        <div className="container">
          <h2 className="center">Visualizing the Differences Between Planets</h2>

          <div className="planet-writeup center-text">
            <p>
              Planetary Facts at a Glance<br />
              Below is a comparative table of major planets in our solar system.
              The data highlights key physical properties used by astronomers and researchers worldwide.
            </p>
          </div>

          <div className="image-grid">
              {planets.map((planet, index) => (
                <figure key={index} className="planet-card">
                  <img src={planet.image} alt={planet.planet} />
                  <figcaption>
                    <h3>{planet.planet}</h3>
                    <p>
                      Distance from Sun: {planet.distanceFromSun} million km
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>

          <p className="subtitle-below center-text">
            Data about the planets of our solar system (Planetary facts taken from NASA)
          </p>
        </div>
      </section>

      <style>{`
        .light-bg {
          background: #dbe0f1;
          color: #0f3f7f; 
          padding: 3rem 1rem;
        }

        .center-text {
          text-align: center;
        }

        .planet-writeup {
          max-width: 700px;
          margin: 0 auto 2rem auto;
          line-height: 1.6;
          font-size: 1rem;
          color: #0f3f7f;
        }

        .image-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr); /* Desktop */
            gap: 1.5rem;
            justify-items: center;
            margin-bottom: 1.5rem;
          }

          @media (max-width: 1024px) {
            .image-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }


          @media (max-width: 768px) {
            .image-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
        .planet-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 15px;
          padding: 0.2rem;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
          width: auto;
          max-width: 250px;
        }

          @media (min-width: 1024px) {
            .planet-card figcaption {
              display: none;
            }
          }

        .planet-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.2);
        }

        .planet-card img {
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          margin-bottom: 0.5rem;
        }

        .planet-card h3 {
          margin: 0.5rem 0 0.25rem;
        }

        .planet-card p {
          margin: 0;
          font-size: 0.9rem;
        }

        .subtitle-below {
          font-size: 0.9rem;
          color: #555;
          margin-top: 1.5rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .planet-writeup, .subtitle-below {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default PlanetGrid;