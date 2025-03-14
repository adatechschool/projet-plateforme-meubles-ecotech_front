import React from "react";
import { Route, Routes } from "react-router-dom";
import smartphone from "./style/Smartphone.jsx";
import LoginPage from "./login/loginPage.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
