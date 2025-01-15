import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Information from "./pages/Information";
import About from "./pages/About";
import Product from "./pages/Products";
import Contact from "./pages/Contact";
import Header from "./sections/Header";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/information" element={<Information />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
);

export default App;
