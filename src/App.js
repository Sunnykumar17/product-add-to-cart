import React from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Contactus from "./components/Contactus";
import { Routes, Route } from "react-router-dom";
import AddToCart from "./components/AddToCart";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/addtocart/:id" element={<AddToCart />} />
      </Routes>
    </div>
  );
};

export default App;
