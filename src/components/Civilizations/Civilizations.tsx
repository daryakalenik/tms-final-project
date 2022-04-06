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
        <div className="main-items-list category-main-block__main-items-list">
          {civilizationsMain.map((item: Civilization) => {
            return (
              <div key={item.id} className="main-item items-list__main-item">
                <h5 className="main-item__item-name">{item.name}</h5>
                <p className="main-item__item-details">{item.team_bonus}</p>
                <Link
                  to={`/civilizations/${item.id}`}
                  className="main-item__item-link"
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
