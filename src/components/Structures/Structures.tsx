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
        <div className="main-items-list category-main-block__main-items-list">
          {structuresMain.map((item: Structure, index: number) => {
            return (
              <div key={index} className="main-item items-list__main-item">
                <h5 className="main-item__item-name">{item.name}</h5>
                <Link
                  to={`/structures/${item.id}`}
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
