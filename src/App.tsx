import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import About from "./pages/About";
import Footer from "./components/Footer";
import ProductDeatils from "./components/ProductDeatils";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDeatils />} />
        <Route path="/products/category/:category" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
