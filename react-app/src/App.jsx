// src/App.js
import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import "./App.css";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid"; 
import PlanetTable from "./components/PlanetTable";




function App() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <PlanetGrid />
      <PlanetTable />

    </>
  );
}

export default App;