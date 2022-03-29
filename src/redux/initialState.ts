import { initialState as initialMainState } from "../ducks/main/reducer";
import { initialState as initialDetailsState } from "../ducks/details/reducer";
import { initialState as initialUniqueUnitState } from "../ducks/uniqueUnit/reducer";
import { initialState as initialUniqueTechState } from "../ducks/uniqueTech/reducer";

const initialState = {
  main: initialMainState,
  details: initialDetailsState,
  uniqueUnit: initialUniqueUnitState,
  uniqueTech: initialUniqueTechState,
};

export default initialState;
