import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "../ducks/main/reducer";
import { detailsReducer } from "../ducks/details/reducer";
import { uniqueUnitReducer } from "../ducks/uniqueUnit/reducer";
import { uniqueTechReducer } from "../ducks/uniqueTech/reducer";

export const rootReducer = combineReducers({
  main: mainReducer,
  details: detailsReducer,
  uniqueUnit: uniqueUnitReducer,
  uniqueTech: uniqueTechReducer,
});
