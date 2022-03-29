import { NavigateFunction, useNavigate, useParams } from "react-router-dom";

import { GET_DETAILS_REQUESTED } from "../../../../ducks/details/reducer";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";
import { MainItemsDetails } from "../../../../types/types";

type StructureParams = {
  id: string;
};

export const useGetStructuresDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<StructureParams>();
  const navigate: NavigateFunction = useNavigate();

  const structuresDetails: MainItemsDetails = useAppSelector((store) => {
    return store.details.data;
  });

  const fetchStructuresDetails = () => {
    dispatch(
      GET_DETAILS_REQUESTED(
        `https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/structure/${id}`
      )
    );
  };
  return {
    fetchStructuresDetails,
    structuresDetails,
    navigate,
  };
};
