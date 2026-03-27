import React from "react";

export default function PlanetTable() {
  return (
    <section className="planet-table-section">
      <h2>Planetary Facts at a Glance</h2>

      <p className="description">
        Below is a comparative table of major planets in our solar system showing key physical properties used in astronomy.
      </p>

      <p className="subtitle">
        Data about the planets of our solar system (NASA-based dataset)
      </p>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Mass (10²⁴ kg)</th>
              <th>Diameter (km)</th>
              <th>Density (kg/m³)</th>
              <th>Distance from Sun (10⁶ km)</th>
              <th>Gravity (m/s²)</th>
            </tr>
          </thead>

          <tbody>
            {/* Terrestrial Planets */}
            <tr>
              <td className="group" rowSpan="4">Terrestrial</td>
              <td>Mercury</td>
              <td>0.330</td>
              <td>4878</td>
              <td>5427</td>
              <td>57.9</td>
              <td>3.7</td>
            </tr>
            <tr>
              <td>Venus</td>
              <td>4.87</td>
              <td>12104</td>
              <td>5243</td>
              <td>108.2</td>
              <td>8.9</td>
            </tr>
            <tr>
              <td>Earth</td>
              <td>5.97</td>
              <td>12756</td>
              <td>5514</td>
              <td>149.6</td>
              <td>9.8</td>
            </tr>
            <tr>
              <td>Mars</td>
              <td>0.642</td>
              <td>6792</td>
              <td>3933</td>
              <td>227.9</td>
              <td>3.7</td>
            </tr>

            {/* Gas Giants */}
            <tr>
              <td className="group" rowSpan="2">Gas Giants</td>
              <td>Jupiter</td>
              <td>1898</td>
              <td>142984</td>
              <td>1326</td>
              <td>778.6</td>
              <td>24.8</td>
            </tr>
            <tr>
              <td>Saturn</td>
              <td>568</td>
              <td>120536</td>
              <td>687</td>
              <td>1433.5</td>
              <td>10.4</td>
            </tr>

            {/* Ice Giants */}
            <tr>
              <td className="group" rowSpan="2">Ice Giants</td>
              <td>Uranus</td>
              <td>86.8</td>
              <td>51118</td>
              <td>1271</td>
              <td>2872.5</td>
              <td>8.7</td>
            </tr>
            <tr>
              <td>Neptune</td>
              <td>102</td>
              <td>49528</td>
              <td>1638</td>
              <td>4495.1</td>
              <td>11.2</td>
            </tr>

            {/* Dwarf Planet */}
            <tr>
              <td className="group">Dwarf</td>
              <td>Pluto</td>
              <td>0.0146</td>
              <td>2370</td>
              <td>1850</td>
              <td>5906.4</td>
              <td>0.6</td>
            </tr>
          </tbody>
        </table>
      </div>

      <style>{`
        .planet-table-section {
          background: #ffffff;
          width: 100%;
          padding: 20px;
          text-align: center;
        }

        h2 {
          color: #164BAF;
          font-family: Inter, sans-serif;
          margin: 0 0 10px 0;
        }

        .description,
        .subtitle {
          color: #0F2A44;
          font-family: Inter, sans-serif;
          margin: 5px auto 20px auto;
          text-align: center;
          display: block;
        }

        .table-wrapper {
          overflow-x: auto;
          margin: 0 auto;
        }

        table {
          border-collapse: collapse;
          width: 90%;
          margin: 0 auto;
          color: #212121;
        }

        th {
          background-color: #164BAF;
          color: white;
          padding: 10px;
          border: 1px solid white;
        }

        td {
          padding: 10px;
          text-align: center;
          background-color: #F2F7FF;
          border: 1px solid white;
        }

        .group {
          background-color: #D1E3FF;
          font-weight: 500;
        }

        table tr { transition: all 0.2s ease-in-out; }
        table tbody tr:hover { background-color: #e6f0ff; transform: scale(1.01); }
        table td { transition: all 0.2s ease; }
        table td:hover { background-color: #d9e8ff; }

        @media (max-width: 1024px) {
          h2 { font-size: 1.6rem; }
          .description, .subtitle { font-size: 0.95rem; }
          table { width: 95%; }
          th, td { padding: 8px; font-size: 0.9rem; }
        }

        @media (max-width: 768px) {
          h2 { font-size: 1.3rem; }
          .description, .subtitle { font-size: 0.85rem; }
          table { width: 100%; min-width: 700px; }
          table tbody tr:hover { transform: none; }
        }
      `}</style>
    </section>
  );
}