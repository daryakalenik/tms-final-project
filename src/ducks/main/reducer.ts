import { createSlice } from "@reduxjs/toolkit";
import { MainItems, ActionError } from "../../types/types";

type Action = { type: string; payload: MainItems };

type MainState = {
  data: MainItems;
  error: unknown;
  isLoading: boolean;
};

export const initialState: MainState = {
  data: {},
  error: null,
  isLoading: false,
};

const reducer = createSlice({
  name: `Main`,
  initialState,
  reducers: {
    GET_DATA_REQUESTED: (state, action: Action) => {
      state.error = initialState.error;
      state.isLoading = true;
    },
    GET_DATA_SUCCEEDED: (state, action: Action) => {
      state.error = initialState.error;
      state.data = action.payload;
      state.isLoading = false;
    },
    GET_DATA_FAILED: (state, action: ActionError) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const mainReducer = reducer.reducer;
export const { GET_DATA_REQUESTED, GET_DATA_SUCCEEDED, GET_DATA_FAILED } =
  reducer.actions;
