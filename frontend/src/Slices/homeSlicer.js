import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const homeSlicer = createSlice({
  name: 'userData',
  initialState:{
    userData:[],
    blog:[]
  },
  reducers: {
  
    setUserData: (state, action) => {
      state.userData=action.payload
    },
    setBlog:(state,action)=>{
        state.blog=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserData,setBlog } = homeSlicer.actions

export default homeSlicer.reducer