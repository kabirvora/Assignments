import { createSlice } from '@reduxjs/toolkit'

export const quantityReducer = createSlice({
  name: 'quantity',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
    },
    decrement: (state) => {
      state.value -= 1
    },
    }
})