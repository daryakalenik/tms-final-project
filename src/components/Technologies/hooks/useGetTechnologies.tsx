import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";

import { GET_DATA_REQUESTED } from "../../../ducks/main/reducer";
import { Technology } from "../../../types/types";

export const useGetTechnologies = () => {
  const dispatch = useAppDispatch();

  const navigate: NavigateFunction = useNavigate();

  const technologiesMain: Technology[] = useAppSelector((store) => {
    return store.main.data.technologies;
  });

  const fetchTechnologies: () => void = () => {
    dispatch(
      GET_DATA_REQUESTED(
        "https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/technologies"
      )
    );
  };

  return { fetchTechnologies, technologiesMain, navigate };
};
