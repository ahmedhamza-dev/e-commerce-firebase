import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductDetails from "../Pages/ProductDetails";
import Shop from "../Pages/Shop";
import Signup from "../Pages/Signup";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="checkout"
          element={
            <ProtectedRoute children={<Checkout />}></ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
