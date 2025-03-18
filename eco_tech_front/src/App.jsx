import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./login/loginPage.jsx";
import ListAllProducts from './components/Card/ListAllProducts.jsx'
import Smartphon_liaison from "./components/PageSmartphone/Smartphon_liaison.jsx";
import Ordinateur_liaison from "./components/PageLaptop/Ordinateur_liaison.jsx";
import ProductDetails from "./components/productDetails.jsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ListAllProducts />} />
        <Route path="/smartphone" element={<Smartphon_liaison />} />
        <Route path="/ordinateur" element={<Ordinateur_liaison />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
