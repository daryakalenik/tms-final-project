import { initialState as initialMainState } from "../ducks/main/reducer";
import { initialState as initialUniqueUnitState } from "../ducks/uniqueUnit/reducer";
import { initialState as initialUniqueTechState } from "../ducks/uniqueTech/reducer";

const initialState = {
  main: initialMainState,
  uniqueUnit: initialUniqueUnitState,
  uniqueTech: initialUniqueTechState,
};

export default initialState;
