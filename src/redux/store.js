import { configureStore } from '@reduxjs/toolkit'
import bodyReducer from './features/bodySlice'
import  cartSlice from './features/cartSlice'

export const store = configureStore({
  reducer: {
    bodyReducer,
    cartSlice,
  },
})
