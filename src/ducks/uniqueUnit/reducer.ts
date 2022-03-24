import { createSlice } from "@reduxjs/toolkit";

export const initialState = { data: [], error: null, isLoading: false };

const reducer = createSlice({
  name: `Unique unit`,
  initialState,
  reducers: {
    GET_UNIQUE_UNIT_REQUESTED: (state, action) => {
      state.error = initialState.error;
      state.isLoading = true;
    },
    GET_UNIQUE_UNIT_SUCCEEDED: (state, action) => {
      state.error = initialState.error;
      state.data = action.payload;
      state.isLoading = false;
    },
    GET_UNIQUE_UNIT_FAILED: (state, action) => {
      state.error = action.payload.message;
      state.isLoading = false;
    },
    GET_UNIQUE_UNIT_DELETE: (state, action) => {
      state.error = initialState.error;
      state.data = initialState.data;
      state.isLoading = false;
    },
  },
});

export const uniqueUnitReducer = reducer.reducer;
export const {
  GET_UNIQUE_UNIT_REQUESTED,
  GET_UNIQUE_UNIT_SUCCEEDED,
  GET_UNIQUE_UNIT_FAILED,
  GET_UNIQUE_UNIT_DELETE,
} = reducer.actions;
