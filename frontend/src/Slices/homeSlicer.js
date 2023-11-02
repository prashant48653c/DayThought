import { createSlice } from '@reduxjs/toolkit'

 

export const homeSlicer = createSlice({
  name: 'userData',
  initialState:{
    userData:[],
    blog:[],
    allUser:[],
    profileData:[]
    
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

}, setProfileData:(state,action)=>{
  state.profileData=action.payload

},

}
})

// Action creators are generated for each case reducer function
export const { setUserData,setBlog,setAllUser,setProfileData } = homeSlicer.actions

export default homeSlicer.reducer