import { useGetUnitsDetails } from "./hooks/useGetUnitsDetails";
import { costSwitch } from "../../../helpers/costSwitch";
import Preloader from "../../Preloader/Preloader";
import { BackButton } from "../../BackButton/BackButton";
import { useEffect, useState } from "react";
import "./styles.scss";

type State = { opened: boolean };

export const UnitsDetails: React.FC = () => {
  const { fetchUnitsDetails, unitsDetails, navigate } = useGetUnitsDetails();

  const [state, setState] = useState<State>({ opened: false });

  useEffect(() => {
    fetchUnitsDetails();
  }, []);

  return (
    <div className="category-main-block">
      <BackButton />
      {unitsDetails ? (
        <div className="item-details-list category-main-block__item-details-list">
          <h2 className="item-details-list__name">{unitsDetails.name}</h2>
          <p className="item-details-list__paragraph">
            {unitsDetails.description}
          </p>
          <div className="cost-block item-details-list_cost-block">
            {unitsDetails.cost ? (
              Object.entries(unitsDetails.cost).map(([key, value]) => {
                return (
                  <div className="cost-block__list">
                    <img src={costSwitch(key)} width="70px" />
                    <p className="cost-block__paragraph">{value}</p>
                  </div>
                );
              })
            ) : (
              <Preloader />
            )}
          </div>
          <div className="another-data-block item-details-list__another-data-block">
            <div className="unit-data-header another-data-block___unit-data-header">
              <p className="unit-data-header__text">Other data:</p>
              <div
                className="unit-data-header__toggler"
                onClick={() => {
                  setState((prevState) => ({ opened: !prevState.opened }));
                }}
              />
            </div>
            {state.opened ? (
              <ul className="another-data-list another-data-block__another-data-list">
                <li className="another-data-list__paragraph">
                  Age: {unitsDetails.age}
                </li>
                <li className="another-data-list__paragraph">
                  Armor: {unitsDetails.armor}
                </li>
                <li className="another-data-list__paragraph">
                  Attack: {unitsDetails.attack}
                </li>
                <li className="another-data-list__paragraph">
                  Attack delay: {unitsDetails.attack_delay}
                </li>
                <li className="another-data-list__paragraph">
                  Build time: {unitsDetails.build_time}
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
