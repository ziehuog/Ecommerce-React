import { createSlice } from '@reduxjs/toolkit';
import { initShopping } from './constants';

const shoppingReducer = createSlice({
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

export default shoppingReducer;
