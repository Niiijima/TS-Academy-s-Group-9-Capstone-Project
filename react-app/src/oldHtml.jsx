function OldHtml() {
  return (
    <>
      <div>
        <html lang="en">
          <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>TS Academy – Solar System</title>

            {/* Google Font */}
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
              rel="stylesheet"
            />

            {/* External CSS */}
            <link rel="stylesheet" href="style.css" />
          </head>
          <body>
            {/* HEADER */}
            <header className="header">
              <div className="container header-content">
                <div className="logo">🪐 planet</div>
                <nav className="nav">
                  <a href="#">Home</a>
                  <a href="#">Planets</a>
                  <a href="#">Contact</a>
                </nav>
              </div>
            </header>

            {/* HERO SECTION */}
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

            {/* VIDEO SECTION */}
            <section className="section">
              <div className="container center">
                <h2>How Planetary Data Helps Us Understand Space</h2>
                <p className="subtitle">
                  Comparing mass, diameter, gravity, and density helps us understand how planets form and behave.
                </p>

                <div className="video-card">
                  <video
                    controls
                    poster="https://images.unsplash.com/photo-1454789548928-9efd52dc4031"
                  >
                    <source src="planet.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>

            {/* IMAGE GRID */}
            <section className="section light-bg">
              <div className="container">
                <h2 className="center">Visualizing the Differences Between Planets</h2>
                <p className="center subtitle">
                  Visual comparisons show how terrestrial planets differ from gas and ice giants.
                </p>

                <div className="image-grid">
                  <img src="https://images.unsplash.com/photo-1614728894747-a83421789f10" alt="" />
                  <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa" alt="" />
                  <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" alt="" />
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="" />
                  <img src="https://images.unsplash.com/photo-1447433819943-74a20887a81e" alt="" />
                  <img src="https://images.unsplash.com/photo-1476610182048-b716b8518aae" alt="" />
                  <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" alt="" />
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="" />
                </div>
              </div>
            </section>

            {/* TABLE SECTION */}
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
                        <th>Mass</th>
                        <th>Diameter</th>
                        <th>Density</th>
                        <th>Gravity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="4">Terrestrial</td>
                        <td>Mercury</td><td>0.330</td><td>4,878</td><td>5427</td><td>3.7</td>
                      </tr>
                      <tr>
                        <td>Venus</td><td>4.87</td><td>12,104</td><td>5243</td><td>8.9</td>
                      </tr>
                      <tr>
                        <td>Earth</td><td>5.97</td><td>12,756</td><td>5514</td><td>9.8</td>
                      </tr>
                      <tr>
                        <td>Mars</td><td>0.642</td><td>6,792</td><td>3933</td><td>3.7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* FORM */}
            <section className="section light-bg">
              <div className="container">
                <h2>Have Questions About Planetary Science?</h2>

                <form className="form-grid">
                  <input type="text" placeholder="Full name" required />
                  <input type="email" placeholder="Email" required />
                  <input type="text" placeholder="City" />
                  <input type="tel" placeholder="Phone number" />

                  <textarea placeholder="Message"></textarea>

                  <div className="checkbox-group">
                    <label><input type="checkbox" /> Friend</label>
                    <label><input type="checkbox" /> TS Academy</label>
                  </div>

                  <button className="btn primary">Submit</button>
                </form>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
              <div className="container footer-content">
                <p>© 2026 Niijima All rights reserved</p>
                <div className="footer-links">
                  <a href="#">Privacy</a>
                  <a href="#">Terms</a>
                </div>
              </div>
            </footer>
          </body>
        </html>
      </div>
    </>
  );
}

export default OldHtml;