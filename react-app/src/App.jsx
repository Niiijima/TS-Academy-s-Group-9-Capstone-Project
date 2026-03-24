// src/App.js
import React, { useRef } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import "./App.css";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid"; 
import PlanetTable from "./components/PlanetTable";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const planetRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function with offset for sticky header
  const scrollToRef = (ref) => {
    if (ref.current) {
      const yOffset = -80; // Adjust this if your header is taller
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToPlanets = () => scrollToRef(planetRef);
  const scrollToContact = () => scrollToRef(contactRef);

  return (
    <>
      {/* Header with scroll handlers */}
      <Header onExploreClick={scrollToPlanets} onContactClick={scrollToContact} />

      {/* Hero with scroll handlers */}
      <Hero onExploreClick={scrollToPlanets} onContactClick={scrollToContact} />

      <VideoSection />

      {/* Planet images section */}
      <div ref={planetRef}>
        <PlanetGrid />
      </div>

      {/* Planet table section */}
      <PlanetTable />

      {/* Contact form section */}
      <div ref={contactRef}>
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}

export default App;