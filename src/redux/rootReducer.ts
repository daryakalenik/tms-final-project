import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "../ducks/main/reducer";
import { uniqueUnitReducer } from "../ducks/uniqueUnit/reducer";
import { uniqueTechReducer } from "../ducks/uniqueTech/reducer";

export const rootReducer = combineReducers({
  main: mainReducer,
  uniqueUnit: uniqueUnitReducer,
  uniqueTech: uniqueTechReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
