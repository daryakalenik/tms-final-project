import { createSlice } from "@reduxjs/toolkit";
import {
  MainItemsDetails,
  ActionError,
  ActionRequest,
} from "../../types/types";

type ActionSuccess = { type: string; payload: MainItemsDetails };

type DetailsState = {
  data: MainItemsDetails;
  error: unknown;
  isLoading: boolean;
};

export const initialState: DetailsState = {
  data: { id: 0, name: ``, expansion: `` },
  error: null,
  isLoading: false,
};

const reducer = createSlice({
  name: `Details`,
  initialState,
  reducers: {
    GET_DETAILS_REQUESTED: (state, action: ActionRequest) => {
      state.error = initialState.error;
      state.isLoading = true;
    },
    GET_DETAILS_SUCCEEDED: (state, action: ActionSuccess) => {
      state.error = initialState.error;
      state.data = action.payload;
      state.isLoading = false;
    },
    GET_DETAILS_FAILED: (state, action: ActionError) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const detailsReducer = reducer.reducer;
export const {
  GET_DETAILS_REQUESTED,
  GET_DETAILS_SUCCEEDED,
  GET_DETAILS_FAILED,
} = reducer.actions;
