import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import  Footer from "./Footer.jsx"

import App from "./App.jsx";
import Navbar from "./components/Header/Nav_bar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <br />
      <App />
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);
