import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGetTechnologies } from "./hooks/useGetTechnologies";

export const Technologies: React.FC = () => {
  const { fetchTechnologies, technologiesMain, navigate } =
    useGetTechnologies();

  useEffect(() => {
    fetchTechnologies();
  }, [fetchTechnologies]);

  return (
    <div className="main-block">
      <div className="btn-back-block">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      <div className="main-items-wrapper">
        {technologiesMain
          ? technologiesMain.map((item: any, index: any) => {
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
            })
          : null}
      </div>
    </div>
  );
};
