import { useState } from "react";

import "./App.css";
import Header from "./Layouts/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddProduct from "./Pages/AddProduct";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
      <Footer/>
    </BrowserRouter>







  );
}

export default App;
