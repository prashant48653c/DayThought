import { configureStore } from '@reduxjs/toolkit'
import homeSlicer from '../Slices/homeSlicer'
import popSlicer from '../Slices/popSlicer'
import resultSlicer from '../Slices/resultSlicer'

export const store = configureStore({
  reducer: {
    home: homeSlicer,
    pop:popSlicer,
    result:resultSlicer
  },
})