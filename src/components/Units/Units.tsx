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
        <div className="main-items-list category-main-block__main-items-list">
          {unitsMain.map((item: Unit, index: number) => {
            return (
              <div key={index} className="main-item items-list__main-item">
                <h5 className="main-item__item-name">{item.name}</h5>
                <p className="main-item__item-details">{item.description}</p>
                <Link to={`/units/${item.id}`} className="main-item__item-link">
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
