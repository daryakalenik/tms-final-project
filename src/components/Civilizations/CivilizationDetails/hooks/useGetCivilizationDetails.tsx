import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks/hooks";

import { GET_DETAILS_REQUESTED } from "../../../../ducks/details/reducer";
import { GET_UNIQUE_UNIT_REQUESTED } from "../../../../ducks/uniqueUnit/reducer";
import { GET_UNIQUE_TECH_REQUESTED } from "../../../../ducks/uniqueTech/reducer";
import { GET_UNIQUE_TECH_DELETE } from "../../../../ducks/uniqueTech/reducer";
import { GET_UNIQUE_UNIT_DELETE } from "../../../../ducks/uniqueUnit/reducer";
import {
  MainItemsDetails,
  UniqueUnitType,
  UniqueTechType,
} from "../../../../types/types";

type CivilizationParams = {
  id: string;
};

export const useGetCivilizationDetails = () => {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const uniqueUnit: UniqueUnitType = useAppSelector((store) => {
    return store.uniqueUnit.data;
  });

  const uniqueTech: UniqueTechType = useAppSelector((store) => {
    return store.uniqueTech.data;
  });

  const civilizationDetails: MainItemsDetails = useAppSelector((store) => {
    return store.details.data;
  });

  const { id } = useParams<CivilizationParams>();

  const getUniqueUnit = (
    e: React.MouseEvent<HTMLInputElement> & { target: { value: string } }
  ) => {
    const url = e.target.value;
    dispatch(
      GET_UNIQUE_UNIT_REQUESTED(`https://thingproxy.freeboard.io/fetch/${url}`)
    );
  };

  const getUniqueTech = (
    e: React.MouseEvent<HTMLInputElement> & { target: { value: string } }
  ) => {
    const url = e.target.value;
    dispatch(
      GET_UNIQUE_TECH_REQUESTED(`https://thingproxy.freeboard.io/fetch/${url}`)
    );
  };

  const fetchCivilizationDetails: () => void = () => {
    dispatch(
      GET_DETAILS_REQUESTED(
        `https://thingproxy.freeboard.io/fetch/https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
      )
    );
  };

  const deleteUniqueTech: () => void = () => {
    dispatch({ type: GET_UNIQUE_TECH_DELETE, payload: `` });
  };
  const deleteUniqueUnit: () => void = () => {
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
    uniqueUnit,
    uniqueTech,
  };
};
