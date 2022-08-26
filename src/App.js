import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import CheckoutPage from "./pages/checkout/checkout.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import "./App.css";

const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route exact path="/checkout" element={<CheckoutPage/>} />
        <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
