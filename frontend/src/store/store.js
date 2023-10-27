import { configureStore } from '@reduxjs/toolkit'
import homeSlicer from '../Slices/homeSlicer'

export const store = configureStore({
  reducer: {
    home: homeSlicer,
  },
})