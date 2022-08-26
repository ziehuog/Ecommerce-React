
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initialState } from './constants'

// First, create the thunk
export const fetchData = createAsyncThunk(
  'data/getData',
  async () => {
    const res = await fetch('https://course-api.com/react-store-products');
    const data = await res.json();
    return data
  }
)

// Then, handle actions in your reducers:
const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [fetchData.pending]: (state) => {
        state.loading = true
        state.message = 'pending'
    },
    [fetchData.fulfilled]: (state, action) => {
      console.log(action.payload)
        state.loading = false
        state.data = action.payload
        state.message = 'fulfilled'

    },
    [fetchData.rejected]: (state, action) => {
        state.loading = false
        state.data = []
        state.message = 'rejected'

    }
    
  },
})

export default dataSlice.reducer
