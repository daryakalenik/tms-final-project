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
        <div className="item-details-list category-main-block__item-details-list">
          <h2 className="item-details-list__name">{structuresDetails.name}</h2>
          <div className="cost-block item-details-list_cost-block">
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
          <div className="another-data-block item-details-list__another-data-block"> 
          <ul className="another-data-list another-data-block__another-data-list">
            <p className="another-data-list__header">Other data:</p>
            <li className="another-data-list__paragraph">
              Build time: {structuresDetails.build_time}
            </li>
            <li className="another-data-list__paragraph">
              Hit Points: {structuresDetails.hit_points}
            </li>
            <li className="another-data-list__paragraph">
              Line of Sight: {structuresDetails.line_of_sight}
            </li>
            <li className="another-data-list__paragraph">
              Armor: {structuresDetails.armor}
            </li>
            <li className="another-data-list__paragraph">
              Age: {structuresDetails.age}
            </li>
          </ul>
           </div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
