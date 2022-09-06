import { createSlice } from '@reduxjs/toolkit';
import { initCart, initialState, initFilter, initUser } from './constants';

// CHOOSE CATEGORY REDUCER
export const shoppingReducer = createSlice({
  name: 'shopping',
  initialState: initialState,
  reducers: {
    chooseCategory(state, action) {
      return {
        ...state,
        category: action.payload
      };
    },

    addSearchKey(state, action){
      return {
        ...state,
        searchKey: action.payload
      }
    }
  }
});

export const actions = shoppingReducer.actions;


// HANDLING CART REDUCER
export const cartReducer = createSlice({
  name: 'cart',
  initialState: initCart,
  reducers: {

    //add item to cart
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

    // remover item from cart
    removeItem(state, action) {
      const newCart = state.cartStore.filter((item) => item.id !== action.payload.id);
      state.cartStore = newCart;
    },

    // decrease quantity of items
    decreaseQuantity(state, action) {
      const itemIndex = state.cartStore.findIndex((item) => item.id === action.payload.id);

      if (state.cartStore[itemIndex].cartQuantity > 1) {
        state.cartStore[itemIndex].cartQuantity -= 1;
      } else if (state.cartStore[itemIndex].cartQuantity === 1) {
        const newCart = state.cartStore.filter((item) => item.id !== action.payload.id);
        state.cartStore = newCart;
      }
    },

    // increase quantity of items
    increaseQuantity(state, action) {
      const itemIndex = state.cartStore.findIndex((item) => item.id === action.payload.id);

      if (state.cartStore[itemIndex].cartQuantity > 0) {
        state.cartStore[itemIndex].cartQuantity += 1;
      } 
    }
  }
});

export const cartActions = cartReducer.actions;


//FILTER REDUCER
export const filterReducer = createSlice({
  name: 'filter',
  initialState: initFilter,
  reducers: {
    sortWithPrice(state, action) {
      return {
        ...state,
        filteredData: action.payload
      };
    },

    addSearchKey(state, action){
      return {
        ...state,
        searchKey: action.payload
      }
    }
  }
});

export const filterActions = filterReducer.actions;

//LOGIN LOGOUT

export const userReducer = createSlice({
  name: 'user',
  initialState: initUser,
  reducers: {
    Login(state, action) {
      return {
        ...state,
        isLogin: action.payload,
        showUser: 'block',
        showLogin: 'none'
      };
    },

    LogOut(state, action){
      return {
        ...state,
        isLogin: action.payload,
        showUser: 'none',
        showLogin: 'block'

      }
    },
    
  }
});

export const userActions = userReducer.actions;
