import { useEffect } from "react";
import { Link } from "react-router-dom";

import Preloader from "../Preloader/Preloader";
import { useGetUnits } from "./hooks/useGetUnits";
import { BackButton } from "../BackButton/BackButton";
import { Unit } from "../../types/types";

export const Units: React.FC = () => {
  const { fetchUnits, unitsMain, navigate } = useGetUnits();

  useEffect(() => {
    fetchUnits();
  }, []);

  return (
    <div className="category-main-block">
      <BackButton />
      {unitsMain ? (
        <div className="category-main-block__items-list items-list">
          {unitsMain.map((item: Unit, index: number) => {
            return (
              <div key={index} className="items-list__item item">
                <h5 className="item__item-name">{item.name}</h5>
                <p className="item__item-details">{item.description}</p>
                <Link to={`/units/${item.id}`} className="item__item-link">
                  Learn more
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
