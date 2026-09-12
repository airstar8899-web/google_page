import About from "./pages/about/About";
import Header from "./static/header/Header";
import Footer from "./static/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import Company from "./pages/company/Company";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </div>
  );
};

export default App;
