import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGetCivilizations } from "./hooks/useGetCivilizations";
import { Civilization } from "../../types/types";
import Preloader from "../Preloader/Preloader";
import { BackButton } from "../BackButton/BackButton";

export const Civilizations: React.FC = () => {
  const { fetchCivilizations, civilizationsMain, navigate } =
    useGetCivilizations();

  useEffect(() => {
    fetchCivilizations();
  }, []);

  return (
    <div className="category-main-block">
      <BackButton />
      {civilizationsMain ? (
        <div className="category-main-block__items-list items-list">
          {civilizationsMain.map((item: Civilization) => {
            return (
              <div key={item.id} className="items-list__item item">
                <h5 className="item__item-name">{item.name}</h5>
                <p className="item__item-details">{item.team_bonus}</p>
                <Link
                  to={`/civilizations/${item.id}`}
                  className="item__item-link"
                >
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
