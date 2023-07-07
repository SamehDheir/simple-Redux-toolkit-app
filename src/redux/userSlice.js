import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      name: "",
      email: "",
    },
    loading: false,
    error: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    startUser: (state) => {
      state.loading = true;
    },
    succesUser: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    errorUser: (state) => {
      state.loading = false
      state.error = true
    }
  },
});

export const { addUser, startUser, succesUser, errorUser } = userSlice.actions;
export default userSlice.reducer;
