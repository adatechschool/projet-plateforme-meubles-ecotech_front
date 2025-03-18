import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./login/loginPage.jsx";
import ListAllProducts from "./components/Card/ListAllProducts.jsx";
import Smartphon_liaison from "./components/PageSmartphone/Smartphon_liaison.jsx";
import { AdminPage } from "./components/admin/AdminPage.jsx";
import Ordinateur_liaison from "./components/PageLaptop/Ordinateur_liaison.jsx";
import ProductDetails from "./components/productDetails.jsx"
import MoniteurRoute from "./components/PageEcran/MoniteurRoute.jsx";
import MontreRoute from "./components/PageMontre/MontreRoute.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ListAllProducts />} />
        <Route path="/smartphone" element={<Smartphon_liaison />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/ordinateur" element={<Ordinateur_liaison />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/moniteur" element={<MoniteurRoute />} />
        <Route path="/montre" element={<MontreRoute />} />
      </Routes>
    </>
  );
}

export default App;
