import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: {
     fullName: '',
     emailAddress: '',
     password: '',
   },
 };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   //  addUser: (state, action) => {
   //    return action.payload;
   //  },
    addUser: (state, action) => {
      state.user[action.payload.field] = action.payload.value;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
