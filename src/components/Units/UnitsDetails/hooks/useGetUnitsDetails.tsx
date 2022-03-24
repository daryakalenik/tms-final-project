import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GET_DATA_REQUESTED } from "../../../../ducks/main/reducer";
import { RootState } from "../../../../redux/rootReducer";

export const useGetUnitsDetails = () => {
  const dispatch = useDispatch();
  const unitsId = useParams().id;
  const navigate = useNavigate();
  const unitsDetails = useSelector((store: RootState) => {
    return store.main.data;
  });

  const fetchUnitsDetails = () => {
    dispatch(
      GET_DATA_REQUESTED(
        `https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/unit/${unitsId}`
      )
    );
  };
  return {
    fetchUnitsDetails,
    unitsDetails,
    navigate,
  };
};
