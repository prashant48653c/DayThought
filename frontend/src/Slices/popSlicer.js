import { createSlice } from '@reduxjs/toolkit'

 

export const popSlicer = createSlice({
  name: 'toggle',
  initialState:{
   toggle:false,
   popMessege:"Fill the form carefully"
    
  },
  reducers: {
  
    setToggle: (state, action) => {
      state.toggle=action.payload
    },
    setpopMessege: (state, action) => {
        state.popMessege=action.payload
      },
 }
})

// Action creators are generated for each case reducer function
export const { setToggle,setpopMessege } = popSlicer.actions

export default popSlicer.reducer