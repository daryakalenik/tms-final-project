import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_DATA_REQUESTED } from "../../../ducks/main/reducer";
import { RootState } from "../../../redux/rootReducer";

export const useGetStructures = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const structuresMain: any = useSelector((store: RootState) => {
    return store.main.data["structures"];
  });

  const fetchStructures = () => {
    dispatch(
      GET_DATA_REQUESTED(
        "https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/structures"
      )
    );
  };

  return { fetchStructures, structuresMain, navigate };
};
