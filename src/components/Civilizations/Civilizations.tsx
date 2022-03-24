import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetCivilizations } from "./hooks/useGetCivilizations";

export const Civilizations: React.FC = () => {
  const { fetchCivilizations, civilizationsMain, navigate } =
    useGetCivilizations();

  useEffect(() => {
    fetchCivilizations();
  }, [fetchCivilizations]);

  return (
    <div className="main-block">
      <div className="btn-back-block">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      <div className="main-items-wrapper">
        {civilizationsMain
          ? civilizationsMain.map((item: any, index: any) => {
              return (
                <div key={index} className="main-item-block">
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
            })
          : null}
      </div>
    </div>
  );
};
