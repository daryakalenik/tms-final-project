import { NavigateFunction, useNavigate } from "react-router-dom";
import { GET_DATA_REQUESTED } from "../../../ducks/main/reducer";
import { RootState } from "../../../redux/store";
import { Unit } from "../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";

export const useGetUnits = () => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const unitsMain: Unit[] = useAppSelector((store) => {
    return store.main.data.units;
  });

  const fetchUnits: () => void = () => {
    dispatch(
      GET_DATA_REQUESTED(
        "https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/units"
      )
    );
  };

  return { fetchUnits, unitsMain, navigate };
};
