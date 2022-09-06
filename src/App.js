import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import CheckoutPage from './pages/checkout/checkout';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

import Header from './components/header/header';
import SignInAndSignUp from './pages/signIn-signUp/signIn-signUp';

import './App.css';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/dataSlice';
import CollectionDetails from './components/collection-details/collection-details';
// import { ToastContainer } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
