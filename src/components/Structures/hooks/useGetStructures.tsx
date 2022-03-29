import { NavigateFunction, useNavigate } from "react-router-dom";
import { GET_DATA_REQUESTED } from "../../../ducks/main/reducer";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { Structure } from "../../../types/types";

export const useGetStructures = () => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const structuresMain: Structure[] = useAppSelector((store) => {
    return store.main.data.structures;
  });

  const fetchStructures: () => void = () => {
    dispatch(
      GET_DATA_REQUESTED(
        "https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/structures"
      )
    );
  };

  return { fetchStructures, structuresMain, navigate };
};
