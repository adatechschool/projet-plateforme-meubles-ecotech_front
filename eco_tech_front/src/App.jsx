import React from "react";
import { Route, Routes } from "react-router-dom";

import Data from "./components/Card/data.jsx";
import LoginPage from "./login/loginPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Data" element={<Data />} />
      </Routes>
    </>
  );
}

export default App;
