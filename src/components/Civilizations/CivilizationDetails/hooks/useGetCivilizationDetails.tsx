import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GET_DATA_REQUESTED } from "../../../../ducks/main/reducer";
import { GET_UNIQUE_UNIT_REQUESTED } from "../../../../ducks/uniqueUnit/reducer";
import { GET_UNIQUE_TECH_REQUESTED } from "../../../../ducks/uniqueTech/reducer";
import { GET_UNIQUE_TECH_DELETE } from "../../../../ducks/uniqueTech/reducer";
import { GET_UNIQUE_UNIT_DELETE } from "../../../../ducks/uniqueUnit/reducer";
import { RootState } from "../../../../redux/rootReducer";

export const useGetCivilizationDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const store = useSelector((store: RootState) => {
    return store;
  });
  const civilizationDetails = useSelector((store: RootState) => {
    return store.main.data;
  });
  const civilizationId = useParams().id;

  const getUniqueUnit = (e) => {
    const url = e.target.value;
    dispatch(
      GET_UNIQUE_UNIT_REQUESTED(`https://thingproxy.freeboard.io/fetch/${url}`)
    );
  };

  const getUniqueTech = (e) => {
    const url = e.target.value;
    dispatch(
      GET_UNIQUE_TECH_REQUESTED(`https://thingproxy.freeboard.io/fetch/${url}`)
    );
  };

  const fetchCivilizationDetails = () => {
    dispatch(
      GET_DATA_REQUESTED(
        `https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${civilizationId}`
      )
    );
  };

  const deleteUniqueTech = () => {
    dispatch({ type: GET_UNIQUE_TECH_DELETE, payload: `` });
  };
  const deleteUniqueUnit = () => {
    dispatch({ type: GET_UNIQUE_UNIT_DELETE, payload: `` });
  };

  return {
    fetchCivilizationDetails,
    civilizationDetails,
    getUniqueUnit,
    getUniqueTech,
    deleteUniqueTech,
    deleteUniqueUnit,
    navigate,
    store,
  };
};
