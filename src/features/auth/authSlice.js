import { createSlice } from "@reduxjs/toolkit";
import { getProfile, login } from "./authAction";

const initialState = {
  isAuthenticated: false,
  accessToken: null,
  profile: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state, action) => {
        //
        state.isAuthenticated = false;

        // state.profile = {}
      })
      .addCase(login.fulfilled, (state, action) => {
        //
        state.isAuthenticated = true;
        state.accessToken = action.payload.access_token;
        console.log("status", state.isAuthenticated);
        console.log("access token ", state.accessToken);
      })
      .addCase(login.rejected, (state, action) => {
        //
        state.isAuthenticated = false;
        console.log("rejected", action.error);
      })
      .addCase(getProfile.pending, (state, action) => {
        //
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        //
        state.profile = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.profile = null;
      });
  },
});

export default authSlice.reducer;
