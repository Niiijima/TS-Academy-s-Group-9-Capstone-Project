// src/App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid"; 




function App() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <PlanetGrid />

    </>
  );
}

export default App;