import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { GET_DETAILS_REQUESTED } from "../../../../ducks/details/reducer";
import { MainItemsDetails } from "../../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";

type TechnologiesParams = {
  id: string;
};

export const useGetTechnologiesDetails = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<TechnologiesParams>();
  const navigate: NavigateFunction = useNavigate();

  const technologiesDetails: MainItemsDetails = useAppSelector((store) => {
    return store.details.data;
  });

  const fetchTechnologiesDetails: () => void = () => {
    dispatch(
      GET_DETAILS_REQUESTED(
        `https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/technology/${id}`
      )
    );
  };
  return {
    fetchTechnologiesDetails,
    technologiesDetails,
    navigate,
  };
};
