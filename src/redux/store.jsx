import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import {cartReducer, shoppingReducer} from './reducer';
// import rootReducer from './reducer';

export default configureStore({
  reducer: {
    data: dataSlice,
    shopping: shoppingReducer.reducer,
    cart: cartReducer.reducer

  }
});
