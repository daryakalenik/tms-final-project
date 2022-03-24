import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GET_DATA_REQUESTED } from "../../../../ducks/main/reducer";
import { RootState } from "../../../../redux/rootReducer";

export const useGetTechnologiesDetails = () => {
  const dispatch = useDispatch();
  const technologiesId = useParams().id;
  const navigate = useNavigate();
  const technologiesDetails = useSelector((store: RootState) => {
    return store.main.data;
  });

  const fetchTechnologiesDetails = () => {
    dispatch(
      GET_DATA_REQUESTED(
        `https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/technology/${technologiesId}`
      )
    );
  };
  return {
    fetchTechnologiesDetails,
    technologiesDetails,
    navigate,
  };
};
