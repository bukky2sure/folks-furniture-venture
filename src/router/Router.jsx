import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Pages
import HomePage from "../pages/HomePage";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import ProductGallery from "../pages/ProductGallery";
import ProductDetail from "../pages/ProductDetail";

function Router() {
  return (
    <BrowserRouter>
      {/* Navbar shown on all pages */}
      <Navbar />

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/productgallery" element={<ProductGallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>

      {/* Footer shown on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
