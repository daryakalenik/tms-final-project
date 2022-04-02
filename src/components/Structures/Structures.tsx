import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useGetStructures } from "./hooks/useGetStructures";
import Preloader from "../Preloader/Preloader";
import { BackButton } from "../BackButton/BackButton";
import { Structure } from "../../types/types";

export const Structures: React.FC = () => {
  const { fetchStructures, structuresMain, navigate } = useGetStructures();

  useEffect(() => {
    fetchStructures();
  }, []);

  return (
    <div className="category-main-block">
      <BackButton />
      {structuresMain ? (
        <div className="category-main-block__items-list items-list">
          {structuresMain.map((item: Structure, index: number) => {
            return (
              <div key={index} className="items-list__item item">
                <h5 className="item__item-name">{item.name}</h5>
                <Link to={`/structures/${item.id}`} className="item__item-link">
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
