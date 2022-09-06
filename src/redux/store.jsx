import { configureStore } from '@reduxjs/toolkit';
import {cartReducer, filterReducer, shoppingReducer, userReducer} from './reducer';

export default configureStore({
  reducer: {
    shopping: shoppingReducer.reducer,
    cart: cartReducer.reducer,
    filter: filterReducer.reducer,
    user: userReducer.reducer

  }
});
