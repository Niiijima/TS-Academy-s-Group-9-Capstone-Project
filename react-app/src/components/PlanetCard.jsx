function PlanetCard({ planet }) {
  return (
    <figure className="planet-card">
      <img src={planet.image.replace("..", "")} alt={planet.planet} />
      <figcaption>
        <h3>{planet.name}</h3>
        <p>Distance from Sun: {planet.distance} million km</p>
      </figcaption>
    </figure>
  );
}

export default PlanetCard;