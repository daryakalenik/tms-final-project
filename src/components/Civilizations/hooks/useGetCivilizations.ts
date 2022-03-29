import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";

import { GET_DATA_REQUESTED } from "../../../ducks/main/reducer";
import { Civilization } from "../../../types/types";

export const useGetCivilizations = () => {
  const dispatch = useAppDispatch();

  const navigate: NavigateFunction = useNavigate();

  const civilizationsMain: Civilization[] = useAppSelector((store) => {
    return store.main.data.civilizations;
  });

  const fetchCivilizations: () => void = () => {
    dispatch(
      GET_DATA_REQUESTED(
        "https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
      )
    );
  };

  return { fetchCivilizations, civilizationsMain, navigate };
};
