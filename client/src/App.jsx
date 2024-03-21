import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import ProductInfo from "./Pages/ProductInfo";
import Footer from "./Components/Footer";
import Checkout from "./Pages/Checkout";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-info" element={<ProductInfo />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
