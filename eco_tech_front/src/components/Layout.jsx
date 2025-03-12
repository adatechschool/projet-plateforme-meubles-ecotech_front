import Navbar from ".Header/Nav_bar.jsx";
import React from "react";
import Footer from "./Footer";
import "./Layout.css"; // Fichier de styles optionnel

function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar /> {/* Menu affiché sur toutes les pages */}
      <main className="content">{children}</main>{" "}
      {/* Contenu unique à chaque page */}
      <Footer /> {/* Pied de page affiché sur toutes les pages */}
    </div>
  );
}

export default Layout;
