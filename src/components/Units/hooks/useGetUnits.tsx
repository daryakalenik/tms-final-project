import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GET_DATA_REQUESTED } from "../../../ducks/main/reducer";
import { RootState } from "../../../redux/rootReducer";

export const useGetUnits = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const unitsMain: any = useSelector((store: RootState) => {
    return store.main.data["units"];
  });

  const fetchUnits = () => {
    dispatch(
      GET_DATA_REQUESTED(
        "https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/units"
      )
    );
  };

  return { fetchUnits, unitsMain, navigate };
};
