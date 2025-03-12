import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Identification from "./Identification.jsx";
import Inscription from "./Inscription.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Inscription />
    <Identification />
  </StrictMode>
);
