import { createSlice } from '@reduxjs/toolkit';
import { initCart, initShopping } from './constants';

export const shoppingReducer = createSlice({
  name: 'shopping',
  initialState: initShopping,
  reducers: {
    chooseCategory(state, action) {
      return {
        ...state,
        category: action.payload
      };
    }
  }
});

export const actions = shoppingReducer.actions;
//  default shoppingReducer;


export const cartReducer = createSlice({
  name: "cart",
  initialState: initCart,
  reducers: {
    addItems(state, action){
      const cart = state.cartStore?.push(action.payload);
      return {
        ...state,
        counter: state.counter + 1,
        cartStore: cart
      }
    }

  }

})

export const cartAcions = cartReducer.actions

