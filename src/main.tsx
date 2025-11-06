import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./HomePage.tsx";
import NavBar from "./NavBar.tsx";
import ItemsList from "./ItemsList.tsx";
import Footer from "./Footer.tsx";
import Product from "./Product.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ItemsList />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
