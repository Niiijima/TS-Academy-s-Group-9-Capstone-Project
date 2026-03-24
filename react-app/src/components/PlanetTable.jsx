import React from "react";

const planetData = [
  {
    category: "Terrestrial",
    planets: [
      { name: "Mercury", mass: 0.330, diameter: 4878, density: 5427, distancefromsun: 57.9 },
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
    <section className="section light-bg">
      <div className="container">
        <div className="table-writeup center-text">
          <h2>Planetary Facts at a Glance</h2>
          <p>
            Below is a comparative table of major planets in our solar system.
            The data highlights key physical properties used by astronomers and researchers worldwide.
          </p>
        </div>

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
                      <td rowSpan={group.planets.length} className="category-cell">
                        {group.category}
                      </td>
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

      <style>{`
        .light-bg {
          background: #fff;
          padding: 3rem 1rem;
          color: #0f3f7f;
        }

        .center-text {
          text-align: center;
          margin-bottom: 2rem;
        }

        .table-writeup h2 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: #0f3f7f;
        }

        .table-writeup p {
          font-size: 1rem;
          color: #555;
          line-height: 1.5;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Scrollable table container */
        .table-wrapper {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px; /* forces scroll on small screens */
        }

        th, td {
          padding: 0.75rem 1rem;
          border: 1px solid #0f3f7f;
          text-align: center;
          white-space: nowrap;
        }

        th {
          background-color: #0f3f7f;
          color: #fff;
        }

        .category-cell {
          background-color: #cce0ff;
          font-weight: bold;
        }

        tr:nth-child(even):not(.category-cell) {
          background-color: #f9f9f9;
        }

        /* Stack table rows for mobile */
        @media (max-width: 600px) {
          table, thead, tbody, th, td, tr {
            display: block;
          }

          thead {
            display: none; /* hide header on small screens */
          }

          tr {
            margin-bottom: 1rem;
            border: 1px solid #0f3f7f;
            border-radius: 8px;
            overflow: hidden;
          }

          td {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 1rem;
            text-align: left;
            border: none;
            border-bottom: 1px solid #0f3f7f;
          }

          td:last-child {
            border-bottom: 0;
          }

          .category-cell {
            background-color: #cce0ff;
            font-weight: bold;
            display: block;
            text-align: center;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}