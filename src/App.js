import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CheckoutPage from './pages/checkout/checkout';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

import Header from './components/header/header';
import SignInAndSignUp from './pages/signIn-signUp/signIn-signUp';

import './App.css';
import CollectionDetails from './components/collection-details/collection-details';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="details/:details" element={<CollectionDetails />} />
        <Route exact path="checkout" element={<CheckoutPage />} />
        <Route path="signin" element={<SignInAndSignUp />} />
      </Routes>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default App;
