import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductUploadPage from "./pages/ProductUploadPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:category" element={<HomePage/>}></Route>
        <Route path="/product/:_id" element={<ProductDetailsPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/product/upload" element={<ProductUploadPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
