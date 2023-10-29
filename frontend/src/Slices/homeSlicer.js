import { createSlice } from '@reduxjs/toolkit'

 

export const homeSlicer = createSlice({
  name: 'userData',
  initialState:{
    userData:[],
    blog:[],
    allUser:[],
    
  },
  reducers: {
  
    setUserData: (state, action) => {
      state.userData=action.payload
    },
    setBlog:(state,action)=>{
        state.blog=action.payload
    },
   
  setAllUser:(state,action)=>{
    state.allUser=action.payload

},}
})

// Action creators are generated for each case reducer function
export const { setUserData,setBlog,setAllUser } = homeSlicer.actions

export default homeSlicer.reducer