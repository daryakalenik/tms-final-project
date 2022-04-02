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
        <div className="category-main-block__items-list items-list">
          {technologiesMain.map((item: Technology, index: number) => {
            return (
              <div key={index} className="items-list__item item">
                <h5 className="item__item-name">{item.name}</h5>
                <p className="item__item-details">{item.description}</p>
                <Link
                  to={`/technologies/${item.id}`}
                  className="item__item-link"
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
