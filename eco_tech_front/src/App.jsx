import React from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";

import LoginPage from "./login/loginPage.jsx";
import ListAllProducts from "./components/Card/ListAllProducts.jsx";
import Smartphon_liaison from "./components/PageSmartphone/Smartphon_liaison.jsx";
import { AdminPage } from "./components/admin/AdminPage.jsx";
import Ordinateur_liaison from "./components/PageLaptop/Ordinateur_liaison.jsx";
import ProductDetails from "./components/productDetails.jsx";
import MoniteurRoute from "./components/PageEcran/MoniteurRoute.jsx";
import { Gestion } from "./components/admin/Gestion-users/Gestion.jsx";
import { ProductList } from "./components/admin/List-product/ProductList.jsx";
import Montre from "./components/montreC/montre.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ListAllProducts />} />
        <Route path="/smartphone" element={<Smartphon_liaison />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="/admin/gestion" element={<Gestion />} />
          <Route path="/admin/product-list" element={<ProductList />} />
        </Route>
        <Route path="/ordinateur" element={<Ordinateur_liaison />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/moniteur" element={<MoniteurRoute />} />
        <Route path="/montre" element={<Montre />} />
      </Routes>
    </>
  );
}

export default App;
