import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Inscription from "./Inscription.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Inscription />
  </StrictMode>
);
