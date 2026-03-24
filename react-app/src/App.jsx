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

  // Scroll to PlanetGrid
  const scrollToPlanets = () => {
    if (planetRef.current) {
      const yOffset = -80; // Adjust if your header is sticky
      const y = planetRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Scroll to ContactForm
  const scrollToContact = () => {
    if (contactRef.current) {
      const yOffset = -80;
      const y = contactRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header onExploreClick={scrollToPlanets} onContactClick={scrollToContact} />
      <Hero />
      <VideoSection />

      {/* PlanetGrid with ref */}
      <div ref={planetRef}>
        <PlanetGrid />
      </div>

      <PlanetTable />

      {/* ContactForm with ref */}
      <div ref={contactRef}>
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}

export default App;