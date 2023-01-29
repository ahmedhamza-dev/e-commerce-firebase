import { createSlice } from "@reduxjs/toolkit";
// import { UserData } from "../../shared/Models.model";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isUser: false
  },
  reducers: {
    signIn: (state, action) => {
        const userObj = localStorage.getItem('userObject');
        if(userObj){
            state.user = userObj;
        }else{
            state.user = action.payload;
            localStorage.setItem('userObject', action.payload)
        }
        state.isUser = true;
    },
    signOut: (state) => {
        state.user = {};
        state.isUser = false;
    }
  },
});
export const {signIn, signOut} = userSlice.actions;
export default userSlice.reducer;
