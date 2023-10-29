import { createSlice } from '@reduxjs/toolkit'

 

export const resultSlicer = createSlice({
  name: 'result',
  initialState:{
  result:[]
    
  },
  reducers: {
  
    setResult: (state, action) => {
      state.result=action.payload
    }, 
 }
})

// Action creators are generated for each case reducer function
export const { setResult } = resultSlicer.actions

export default resultSlicer.reducer