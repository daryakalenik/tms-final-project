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
        <div className="category-main-block__details-list details-list">
          <h2 className="details-list__name">{civilizationDetails.name}</h2>
          <p className="details-list__paragraph">
            {civilizationDetails.team_bonus}
          </p>
          <ul className="details-list__data-list data-list">
            <p className="data-list__header">Civilization bonus:</p>
            {civilizationDetails.civilization_bonus?.map(
              (item: string, index: number) => {
                return (
                  <li key={index} className="data-list__paragraph">
                    {item}
                  </li>
                );
              }
            )}
          </ul>
          <button
            value={civilizationDetails.unique_unit}
            onClick={getUniqueUnit}
            className="details-list__button"
          >
            Unique unit
          </button>
          <button
            value={civilizationDetails.unique_tech}
            onClick={getUniqueTech}
            className="details-list__button"
          >
            Unique tech
          </button>
        </div>
      ) : (
        <Preloader />
      )}
      <div className="category-main-block__unique-items-block">
        {uniqueUnit ? (
          <div className="unique-items-block__unique-item unique-item">
            <div className="unique-item__data-list data-list">
              <p className="data-list__header">
                {uniqueUnit.name}
                {uniqueUnit.name ? (
                  <button
                    className="unique-item__delete-button"
                    onClick={deleteUniqueUnit}
                  >
                    X
                  </button>
                ) : null}
              </p>
              <p className="data-list__paragraph">{uniqueUnit.description}</p>
              <div className="unique-item__cost-block cost-block">
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
          <div className="unique-items-block__unique-item unique-item">
            <div className="unique-item__data-list data-list">
              <p className="data-list__header">
                {uniqueTech.name}
                {uniqueTech.name ? (
                  <button
                    className="unique-item__delete-button"
                    onClick={deleteUniqueTech}
                  >
                    X
                  </button>
                ) : null}
              </p>

              <p className="data-list__paragraph">{uniqueTech.description}</p>
              <div className="unique-item__cost-block cost-block">
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
