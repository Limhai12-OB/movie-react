import { createSlice } from "@reduxjs/toolkit";
// import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { fetchMovies } from "./MovieAction";

const initialState = {
  data: {},
  status: "",
  error: {},
};

export const MovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        //
        state.status = "PENDING";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        //
        state.status = "SUCCEED";
        state.data = action.payload; // paylaod from api
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        //
        state.status = "ERROR";
        state.error = action.error;
      });
  },
});

export default MovieSlice.reducer;
