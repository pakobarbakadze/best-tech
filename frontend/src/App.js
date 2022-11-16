import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductUploadPage from "./pages/ProductUploadPage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:category" element={<HomePage />}></Route>
        <Route path="/product/:_id" element={<ProductDetailsPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/product/upload" element={<ProductUploadPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/shipping" element={<ShippingPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
