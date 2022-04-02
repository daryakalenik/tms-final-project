import { useEffect } from "react";

import { useGetTechnologiesDetails } from "./hooks/useGetTechnologiesDetails";
import { costSwitch } from "../../../helpers/costSwitch";
import Preloader from "../../Preloader/Preloader";
import { BackButton } from "../../BackButton/BackButton";

export const TechnologiesDetails: React.FC = () => {
  const { fetchTechnologiesDetails, technologiesDetails, navigate } =
    useGetTechnologiesDetails();

  useEffect(() => {
    fetchTechnologiesDetails();
  }, []);

  return (
    <div className="category-main-block">
      <BackButton />
      {technologiesDetails ? (
        <div className="category-main-block__details-list details-list">
          <h2 className="details-list__name">{technologiesDetails.name}</h2>
          <p className="details-list__paragraph">
            {technologiesDetails.description}
          </p>
          <div className="unique-item__cost-block cost-block">
            {technologiesDetails.cost
              ? Object.entries(technologiesDetails.cost).map(([key, value]) => {
                  return (
                    <div className="cost-block__list">
                      <img src={costSwitch(key)} width="70px" />
                      <p className="cost-block__paragraph">{value}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
