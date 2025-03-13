import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Header/Nav_bar.jsx";
import Card from "./components/Card/data.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Card />
    </BrowserRouter>
  </StrictMode>
);
