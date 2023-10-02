import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDeatils from "./components/ProductDeatils";
import About from "./pages/About";
import Main from "./pages/Main";
import Products from "./pages/Products";

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <Routes>
          <Route path="/:id" element={<ProductDeatils />} />
          <Route path="/category/:category" element={<Products />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
