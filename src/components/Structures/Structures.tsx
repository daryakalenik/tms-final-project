import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetStructures } from "./hooks/useGetStructures";
import Preloader from "../Preloader/Preloader";

export const Structures: React.FC = () => {
  const { fetchStructures, structuresMain, navigate } = useGetStructures();

  useEffect(() => {
    fetchStructures();
  }, [fetchStructures]);

  return (
    <div className="main-block">
      <div className="btn-back-block">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      {structuresMain ? (
        <div className="main-items-wrapper">
          {structuresMain.map((item: any, index: any) => {
            return (
              <div key={index} className="main-item-block">
                <h5 className="main-item-name">{item.name}</h5>
                <Link to={`/structures/${item.id}`} className="main-item-link">
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
