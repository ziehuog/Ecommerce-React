
import { createAsyncThunk, createSlice,configureStore } from '@reduxjs/toolkit'

// First, create the thunk
const fetchUserById = createAsyncThunk(
  'data/getData',
  async () => {
    return fetch('https://course-api.com/react-store-products'). then(res => res.json())
  }
)


// Then, handle actions in your reducers:
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    data: [],
    loading: false
  },
  extraReducers:  {
   [getData.pending]: (state, action) => {
    state.loading = true;
   },
   [getData.fulfilled]: (state, action) => {
    state.loading = false;
    state.data = action.payload
   },
   [getData.rejected]: (state, action) => {
    state.loading = false;
   },

  },
})

export default configureStore({
    reducer: {
        data: dataSlice
    }
})
