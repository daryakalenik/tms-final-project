import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { MainItemsDetails } from "../../../../types/types";
import { GET_DETAILS_REQUESTED } from "../../../../ducks/details/reducer";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";

type UnitsParams = {
  id: string;
};

export const useGetUnitsDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<UnitsParams>();
  const navigate: NavigateFunction = useNavigate();
  const unitsDetails: MainItemsDetails = useAppSelector((store) => {
    return store.details.data;
  });

  const fetchUnitsDetails: () => void = () => {
    dispatch(
      GET_DETAILS_REQUESTED(
        `https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/${id}`
      )
    );
  };
  return {
    fetchUnitsDetails,
    unitsDetails,
    navigate,
  };
};
