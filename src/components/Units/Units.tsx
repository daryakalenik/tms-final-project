import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetUnits } from "./hooks/useGetUnits";

export const Units: React.FC = () => {
  const { fetchUnits, unitsMain, navigate } = useGetUnits();

  useEffect(() => {
    fetchUnits();
  }, [fetchUnits]);

  return (
    <div className="main-block">
      <div className="btn-back-block">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      <div className="main-items-wrapper">
        {unitsMain
          ? unitsMain.map((item: any, index: any) => {
              return (
                <div key={index} className="main-item-block">
                  <h5 className="main-item-name">{item.name}</h5>
                  <p className="main-item-details">{item.description}</p>
                  <Link to={`/units/${item.id}`} className="main-item-link">
                    {" "}
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
