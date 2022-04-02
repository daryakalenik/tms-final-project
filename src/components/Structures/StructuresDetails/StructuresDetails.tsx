import { useEffect } from "react";

import { useGetStructuresDetails } from "./hooks/useGetStructuresDetails";
import { costSwitch } from "../../../helpers/costSwitch";
import { BackButton } from "../../BackButton/BackButton";
import Preloader from "../../Preloader/Preloader";

export const StructuresDetails: React.FC = () => {
  const { fetchStructuresDetails, navigate, structuresDetails } =
    useGetStructuresDetails();

  useEffect(() => {
    fetchStructuresDetails();
  }, []);

  return (
    <div className="category-main-block">
      <BackButton />
      {structuresDetails ? (
        <div className="category-main-block__details-list details-list">
          <h2 className="details-list__name">{structuresDetails.name}</h2>
          <div className="unique-item__cost-block cost-block">
            {structuresDetails.cost
              ? Object.entries(structuresDetails.cost).map(([key, value]) => {
                  return (
                    <div className="cost-block__list">
                      <img src={costSwitch(key)} width="70px" />
                      <p className="cost-block__paragraph">{value}</p>
                    </div>
                  );
                })
              : null}
          </div>
          <ul className="details-list__data-list data-list">
            <p className="data-list__header">Other data:</p>
            <li className="data-list__paragraph">
              Build time: {structuresDetails.build_time}
            </li>
            <li className="data-list__paragraph">
              Hit Points: {structuresDetails.hit_points}
            </li>
            <li className="data-list__paragraph">
              Line of Sight: {structuresDetails.line_of_sight}
            </li>
            <li className="data-list__paragraph">
              Armor: {structuresDetails.armor}
            </li>
            <li className="data-list__paragraph">
              Age: {structuresDetails.age}
            </li>
          </ul>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
