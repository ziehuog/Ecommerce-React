import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';
import rootReducer from './reducer';

export default configureStore({
  reducer: {
    data: dataSlice,
    shopping: rootReducer.reducer
  }
});
