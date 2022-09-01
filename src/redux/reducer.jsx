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
  name: 'cart',
  initialState: initCart,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartStore.findIndex((item) => item.id === action.payload.id);

      if (itemIndex !== -1) {
        state.cartStore[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1
        };
        state.cartStore.push(tempProduct);
      }
    },

    removeItem(state, action) {
      const newCart = state.cartStore.filter((item) => item.id !== action.payload.id);
      state.cartStore = newCart;
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cartStore.findIndex((item) => item.id === action.payload.id);

      if (state.cartStore[itemIndex].cartQuantity > 1) {
        state.cartStore[itemIndex].cartQuantity -= 1;
      } else if (state.cartStore[itemIndex].cartQuantity === 1) {
        const newCart = state.cartStore.filter((item) => item.id !== action.payload.id);
        state.cartStore = newCart;
      }
      localStorage.setItem('cartStore', JSON.stringify(state.cartStore))
    },

    increaseQuantity(state, action) {
      const itemIndex = state.cartStore.findIndex((item) => item.id === action.payload.id);

      if (state.cartStore[itemIndex].cartQuantity > 0) {
        state.cartStore[itemIndex].cartQuantity += 1;
      } 
      localStorage.setItem('cartStore', JSON.stringify(state.cartStore))
    }
  }
});

export const cartAcions = cartReducer.actions;
