import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <>
     <Header />
     {/*  <div className=" bg-[url('/assets/img/pole.jpg')] bg-no-repeat bg-cover bg-center w-full h-screen">
      </div> */}
     
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
     
    </>
  );
}

export default App;
