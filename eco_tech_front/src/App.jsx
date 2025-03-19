import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./login/loginPage.jsx";
import ListAllProducts from './components/Card/ListAllProducts.jsx'
import Smartphon_liaison from "./components/PageSmartphone/Smartphon_liaison.jsx";
import TestAdmin from "./login/loginADIM.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ListAllProducts />} />
        <Route path="/smartphone" element={<Smartphon_liaison />} />
        <Route path="/autre" element={< TestAdmin/>} />
      </Routes>
    </>
  );
}

export default App;
