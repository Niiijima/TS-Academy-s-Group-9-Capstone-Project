function VideoSection() {
  return (
    <div className="video-section"> 
      <h2>How Planetary Data Helps Us Understand Space</h2>

      <p className="subtitle">
        Comparing <span>mass, diameter, gravity, </span> and <span>density</span> helps us understand how planets form and behave.
      </p>

      <div >
        <video className="video-card" autoPlay muted loop controls>
          <source 
            src= "https://www.pexels.com/download/video/36029081/"
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoSection;