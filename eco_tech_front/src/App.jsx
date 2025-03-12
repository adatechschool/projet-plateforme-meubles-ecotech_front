import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Nav_bar.jsx"; // Barre de navigation
import About from "./pages/About"; // Page À propos
import Contact from "./pages/Contact"; // Nouvelle page Contact
import Home from "./pages/Home"; // Page d'accueil

function App() {
  return (
    <>
      <Navbar /> {/* Affiché sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route pour Accueil */}
        <Route path="/about" element={<About />} /> {/* Route pour À propos */}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Route pour Contact */}
      </Routes>
    </>
  );
}

export default App;
