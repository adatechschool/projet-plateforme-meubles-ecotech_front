import React from "react";
import { Route, Routes } from "react-router-dom";

import Admin from "./Admin/AdminPage.jsx";
import ListAllProducts from "./components/Card/ListAllProducts.jsx";
import Smartphon_liaison from "./components/PageSmartphone/Smartphon_liaison.jsx";
import LoginPage from "./login/loginPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ListAllProducts />} />
        <Route path="/smartphone" element={<Smartphon_liaison />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;
