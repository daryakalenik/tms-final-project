import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGetTechnologies } from "./hooks/useGetTechnologies";
import Preloader from "../Preloader/Preloader";
import { BackButton } from "../BackButton/BackButton";
import { Technology } from "../../types/types";

export const Technologies: React.FC = () => {
  const { fetchTechnologies, technologiesMain, navigate } =
    useGetTechnologies();

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return (
    <div className="category-main-block">
      <BackButton />
      {technologiesMain ? (
        <div className="main-items-list category-main-block__main-items-list">
          {technologiesMain.map((item: Technology, index: number) => {
            return (
              <div key={index} className="main-item items-list__main-item">
                <h5 className="main-item__item-name">{item.name}</h5>
                <p className="main-item__item-details">{item.description}</p>
                <Link
                  to={`/technologies/${item.id}`}
                  className="main-item__item-link"
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
