import React from "react";
import Home from "./pages/Home";
import ProductContainer from "./components/product/ProductContainer";
import Pricing from "./pages/pricing/Pricing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resource from "./pages/Resource/Resource";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductContainer />} />
        <Route path="/price" element={<Pricing />} />
        <Route path="/resources" element={<Resource />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
