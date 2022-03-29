import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGetCivilizations } from "./hooks/useGetCivilizations";
import { Civilization } from "../../types/types";
import Preloader from "../Preloader/Preloader";

export const Civilizations: React.FC = () => {
  const { fetchCivilizations, civilizationsMain, navigate } =
    useGetCivilizations();

  useEffect(() => {
    fetchCivilizations();
  }, []);

  return (
    <div className="main-block">
      <div className="btn-back-block">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      {civilizationsMain ? (
        <div className="main-items-wrapper">
          {civilizationsMain.map((item: Civilization) => {
            return (
              <div key={item.id} className="main-item-block">
                <h5 className="main-item-name">{item.name}</h5>
                <p className="main-item-details">{item.team_bonus}</p>
                <Link
                  to={`/civilizations/${item.id}`}
                  className="main-item-link"
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
