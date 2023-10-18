import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartList: [] }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartList.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      )

      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cartList.push({ ...action.payload })
      }
    },
    Decrease: (state, action) => {
      const existingItem = state.cartList.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      )

      if (existingItem.quantity > 1) {
        existingItem.quantity--
      } 
    },
    removeFromCart: (state, action) => {
      console.log(action)
      state.cartList = state.cartList.filter(
        (item) =>
          item.id !== action.payload.id || item.size !== action.payload.size
      )
    },
  },
})

export const { addToCart, removeFromCart, Decrease } = cartSlice.actions
export default cartSlice.reducer
