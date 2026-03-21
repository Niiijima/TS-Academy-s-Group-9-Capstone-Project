import { useEffect, useState } from "react";

function PlanetGrid() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("https://anurella.github.io/json/planets.json")
      .then((res) => res.json())
      .then((data) => setPlanets(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="planet-grid">
      <section className="section light-bg">
        <div className="container">
          <h2 className="center">
            Visualizing the Differences Between Planets
          </h2>
          <p className="center subtitle">
            Visual comparisons show how terrestrial planets differ from gas and ice giants.
          </p>

          <div className="image-grid">
            {planets.map((planet, index) => (
              <figure key={index} className="planet-card">
                <img src={planet.image} alt={planet.name} />

                <figcaption>
                  <h3>{planet.name}</h3>
                  <p>Distance from Sun: {planet.distance}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlanetGrid;