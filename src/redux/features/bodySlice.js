import { createSlice } from '@reduxjs/toolkit'
const initialState = false
const bodySlice = createSlice({
  name: 'bodyColor',
  initialState,
  reducers: {
    bodyActive: (state, action) => {
      return !state
    },
  },
})

export const { bodyActive } = bodySlice.actions
export default bodySlice.reducer
