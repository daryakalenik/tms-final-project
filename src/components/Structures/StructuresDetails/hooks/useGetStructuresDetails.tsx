import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GET_DATA_REQUESTED } from "../../../../ducks/main/reducer";
import { RootState } from "../../../../redux/rootReducer";

export const useGetStructuresDetails = () => {
  const dispatch = useDispatch();
  const structuresId = useParams().id;
  const navigate = useNavigate();
  const structuresDetails = useSelector((store: RootState) => {
    return store.main.data;
  });

  const fetchStructuresDetails = () => {
    dispatch(
      GET_DATA_REQUESTED(
        `https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/structure/${structuresId}`
      )
    );
  };
  return {
    fetchStructuresDetails,
    structuresDetails,
    navigate,
  };
};
