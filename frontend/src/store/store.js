import { configureStore } from '@reduxjs/toolkit'
import homeSlicer from '../Slices/homeSlicer'
import popSlicer from '../Slices/popSlicer'

export const store = configureStore({
  reducer: {
    home: homeSlicer,
    pop:popSlicer,
  },
})