function VideoSection() {
  return (
    <div className="video-section"> 
        <h2>How Planetary Data Helps Us Understand Space</h2>
      <p className="subtitle">
        Comparing <span>mass, diameter, gravity, </span> and <span> density </span> helps us understand how planets form and behave.
      </p>

      <div className="video-card">
        <video controls poster="https://images.unsplash.com/photo-1454789548928-9efd52dc4031"> <source src="planet.mp4" type="video/mp4" />
        </video>

      </div>
    </div>
  );
}

export default VideoSection;