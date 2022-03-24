import { createSlice } from "@reduxjs/toolkit";

export const initialState = { data: [], error: null, isLoading: false };

const reducer = createSlice({
  name: `Unique tech`,
  initialState,
  reducers: {
    GET_UNIQUE_TECH_REQUESTED: (state, action) => {
      state.error = initialState.error;
      state.isLoading = true;
    },
    GET_UNIQUE_TECH_SUCCEEDED: (state, action) => {
      state.error = initialState.error;
      state.data = action.payload;
      state.isLoading = false;
    },
    GET_UNIQUE_TECH_FAILED: (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    GET_UNIQUE_TECH_DELETE: (state, action) => {
      state.error = initialState.error;
      state.data = initialState.data;
      state.isLoading = false;
    },
  },
});

export const uniqueTechReducer = reducer.reducer;
export const {
  GET_UNIQUE_TECH_REQUESTED,
  GET_UNIQUE_TECH_SUCCEEDED,
  GET_UNIQUE_TECH_FAILED,
  GET_UNIQUE_TECH_DELETE,
} = reducer.actions;
