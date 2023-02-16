import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";
import LoginForm from "./Pages/LoginForm";
import HomePage from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import NewsPage from "./Pages/NewsPage";
import DetailProductPage from "./Pages/DetailProductPage";
import CartPage from "./Pages/CartPage";
import ProductCategoryPage from "./Pages/ProductCategoryPage";
import OrderManagement from "./Pages/OrderManagement";
import DetailOrderPage from "./Pages/DetailOrderPage";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/order/:id" element={<DetailOrderPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/category/:idCategory" element={<ProductCategoryPage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
