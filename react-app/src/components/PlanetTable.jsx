// src/components/PlanetTable.jsx
import React from "react";

const planetData = [
  {
    category: "Terrestrial",
    planets: [
      { name: "Mercury", mass: 0.33, diameter: 4878, density: 5427, distancefromsun: 57.9 },
      { name: "Venus", mass: 4.87, diameter: 12104, density: 5243, distancefromsun: 108.2 },
      { name: "Earth", mass: 5.97, diameter: 12756, density: 5514, distancefromsun: 149.6 },
      { name: "Mars", mass: 0.642, diameter: 6792, density: 3933, distancefromsun: 227.9 },
    ],
  },
  {
    category: "Gas Giants",
    planets: [
      { name: "Jupiter", mass: 1898, diameter: 142984, density: 1326, distancefromsun: 778.6 },
      { name: "Saturn", mass: 568, diameter: 120536, density: 687, distancefromsun: 1433.5 },
      { name: "Uranus", mass: 86.8, diameter: 51118, density: 1271, distancefromsun: 2872.5 },
      { name: "Neptune", mass: 102, diameter: 49528, density: 1638, distancefromsun: 4495.1 },
      { name: "Pluto", mass: 0.0146, diameter: 2370, density: 1850, distancefromsun: 5906.4 },
    ],
  },
];

export default function PlanetTable() {
  return (
    <section className="section">
      <div className="container">
        <h2>Planetary Facts at a Glance</h2>
        <p className="subtitle">Planetary facts taken from NASA</p>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Name</th>
                <th>Mass (10^24 kg)</th>
                <th>Diameter (km)</th>
                <th>Density (kg/m³)</th>
                <th>Distance from Sun (10^6 km)</th>
              </tr>
            </thead>
            <tbody>
              {planetData.map((group, groupIndex) =>
                group.planets.map((planet, index) => (
                  <tr key={`${groupIndex}-${index}`}>
                    {index === 0 && (
                      <td rowSpan={group.planets.length}>{group.category}</td>
                    )}
                    <td>{planet.name}</td>
                    <td>{planet.mass}</td>
                    <td>{planet.diameter}</td>
                    <td>{planet.density}</td>
                    <td>{planet.distancefromsun}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}