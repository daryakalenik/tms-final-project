import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGetTechnologies } from "./hooks/useGetTechnologies";
import Preloader from "../Preloader/Preloader";
import { Technology } from "../../types/types";

export const Technologies: React.FC = () => {
  const { fetchTechnologies, technologiesMain, navigate } =
    useGetTechnologies();

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return (
    <div className="main-block">
      <div className="btn-back-block">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      {technologiesMain ? (
        <div className="main-items-wrapper">
          {technologiesMain.map((item: Technology, index: number) => {
            return (
              <div key={index} className="main-item-block">
                <h5 className="main-item-name">{item.name}</h5>
                <p className="main-item-details">{item.description}</p>
                <Link
                  to={`/technologies/${item.id}`}
                  className="main-item-link"
                >
                  {" "}
                  Learn more
                </Link>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
