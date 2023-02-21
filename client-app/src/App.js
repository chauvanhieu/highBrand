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
import ProductManagement from "./Pages/ProductManagement";
import EditProductPage from "./Pages/EditProductPage";
import UserManagement from "./Pages/UserManagement";
import EditUserPage from "./Pages/EditUserPage";
import EditAdminPage from "./Pages/EditAdminPage";
import ForgotPassword from "./Pages/ForgotPassword";
import ProfilePage from "./Pages/ProfilePage";
import ControlOrderProfile from "./Pages/ControlOrderProfile";
import CategoryManagement from "./Pages/CategoryManagement";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/order/:id" element={<ControlOrderProfile />} />
        <Route path="/category/:idCategory" element={<ProductCategoryPage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/admin/orders" element={<OrderManagement />} />
        <Route exact path="/admin/product" element={<ProductManagement />} />
        <Route exact path="/admin/category" element={<CategoryManagement />} />
        <Route exact path="/admin/users" element={<UserManagement />} />
        <Route exact path="/admin" element={<EditAdminPage />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin/users/:id" element={<EditUserPage />} />
        <Route path="/admin/product/:id" element={<EditProductPage />} />
        <Route path="/admin/orders/:id" element={<DetailOrderPage />} />
      </Routes>
    </div>
  );
}

export default App;
