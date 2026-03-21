function PlanetGrid() {
  return (
    <div className="planet-grid"> 
      <section className="section light-bg">
        <div className="container">
          <h2 className="center">Visualizing the Differences Between Planets</h2>
          <p className="center subtitle">
            Visual comparisons show how terrestrial planets differ from gas and ice giants.
          </p>

          <div className="image-grid">
            <img src="https://images.unsplash.com/photo-1614728894747-a83421789f10" alt="Planet view 1" />
            <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa" alt="Planet view 2" />
            <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" alt="Planet view 3" />
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="Planet view 4" />
            <img src="https://images.unsplash.com/photo-1447433819943-74a20887a81e" alt="Planet view 5" />
            <img src="https://images.unsplash.com/photo-1476610182048-b716b8518aae" alt="Planet view 6" />
            <img src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564" alt="Planet view 7" />
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa" alt="Planet view 8" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PlanetGrid;