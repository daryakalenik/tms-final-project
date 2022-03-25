import { useGetTechnologiesDetails } from "./hooks/useGetTechnologiesDetails";
import { costSwitch } from "../../../helpers/costSwitch";
import { useEffect } from "react";

export const TechnologiesDetails: React.FC = () => {
  const { fetchTechnologiesDetails, technologiesDetails, navigate } =
    useGetTechnologiesDetails();

  useEffect(() => {
    fetchTechnologiesDetails();
  }, [fetchTechnologiesDetails]);

  return (
    <div className="main-block">
      <div className="btn-back-block">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      {technologiesDetails ? (
        <div className="details-block">
          <h2>{technologiesDetails["name"]}</h2>
          <h3>{technologiesDetails["description"]}</h3>
          <div>
            {technologiesDetails["cost"]
              ? Object.entries(technologiesDetails["cost"]).map(
                  ([key, value]) => {
                    return (
                      <div className="cost-block">
                        <img src={costSwitch(key)} width="70px" />
                        <p>{value}</p>
                      </div>
                    );
                  }
                )
              : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};