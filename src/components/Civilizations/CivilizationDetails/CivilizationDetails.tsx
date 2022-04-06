import { useEffect } from "react";

import Preloader from "../../Preloader/Preloader";
import { useGetCivilizationDetails } from "./hooks/useGetCivilizationDetails";
import { costSwitch } from "../../../helpers/costSwitch";
import { BackButton } from "../../BackButton/BackButton";
import "../styles.scss";

export const CivilizationDetails: React.FC = () => {
  const {
    fetchCivilizationDetails,
    civilizationDetails,
    getUniqueUnit,
    getUniqueTech,
    deleteUniqueTech,
    deleteUniqueUnit,
    navigate,
    uniqueUnit,
    uniqueTech,
  } = useGetCivilizationDetails();

  useEffect(() => {
    fetchCivilizationDetails();
  }, []);

  return (
    <div className="category-main-block">
      <BackButton />
      {civilizationDetails ? (
        <div className="item-details-list category-main-block__item-details-list">
          <h2 className="item-details-list__name">{civilizationDetails.name}</h2>
          <p className="item-details-list__paragraph">
            {civilizationDetails.team_bonus}
          </p>
          <div className="another-data-block item-details-list__another-data-block">
          <ul className="another-data-list another-data-block__another-data-list">
            <p className="another-data-list__header ">Civilization bonus:</p>
            {civilizationDetails.civilization_bonus?.map(
              (item: string, index: number) => {
                return (
                  <li key={index} className="another-data-list__paragraph">
                    {item}
                  </li>
                );
              }
            )}
          </ul>
          </div>
          <button
            value={civilizationDetails.unique_unit}
            onClick={getUniqueUnit}
            className="item-details-list__button"
          >
            Unique unit
          </button>
          <button
            value={civilizationDetails.unique_tech}
            onClick={getUniqueTech}
            className="item-details-list__button"
          >
            Unique tech
          </button>
        </div>
      ) : (
        <Preloader />
      )}
      <div className="unique-items-block category-main-block__unique-items-block">
        {uniqueUnit ? (
          <div className="unique-item unique-items-block__unique-item">
            <div className="unique-details-list unique-item__unique-details-list">
              <p className="unique-details-list__header">
                {uniqueUnit.name}
                {uniqueUnit.name ? (
                  <button
                    className="unique-details-list__delete-button"
                    onClick={deleteUniqueUnit}
                  >
                    X
                  </button>
                ) : null}
              </p>
              <p className="unique-details-list__paragraph">{uniqueUnit.description}</p>
              <div className="cost-block unique-details-list__cost-block">
                {uniqueUnit.cost
                  ? Object.entries(uniqueUnit.cost).map(([key, value]) => {
                      return (
                        <div className="cost-block__list">
                          <img src={costSwitch(key)} width="50px" />
                          <p className="cost-block__paragraph">{value}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        ) : null}

        {uniqueTech ? (
          <div className="unique-item unique-items-block__unique-item">
            <div className="unique-details-list unique-item__unique-details-list">
              <p className="unique-details-list__header">
                {uniqueTech.name}
                {uniqueTech.name ? (
                  <button
                    className="unique-details-list__delete-button"
                    onClick={deleteUniqueTech}
                  >
                    X
                  </button>
                ) : null}
              </p>

              <p className="unique-details-list__paragraph">{uniqueTech.description}</p>
              <div className="cost-block unique-details-list__cost-block">
                {uniqueTech.cost
                  ? Object.entries(uniqueTech.cost).map(([key, value]) => {
                      return (
                        <div className="cost-block__list">
                          <img src={costSwitch(key)} width="50px" />
                          <p className="cost-block__paragraph">{value}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
