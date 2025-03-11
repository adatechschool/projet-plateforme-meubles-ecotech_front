import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Inscription from "./Inscription.jsx";
import Identification from "./Identification.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Inscription />
    <Identification />
  </StrictMode>
);
