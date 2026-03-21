// src/App.js
import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import "./App.css";
import VideoSection from "./components/VideoSection";
import PlanetGrid from "./components/PlanetGrid"; 
import PlanetTable from "./components/PlanetTable";
import ContactForm from "./components/ContactForm";



function App() {
  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <PlanetGrid />
      <PlanetTable />
      <ContactForm />

    </>
  );
}

export default App;