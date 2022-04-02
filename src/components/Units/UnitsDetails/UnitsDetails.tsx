import { useGetUnitsDetails } from "./hooks/useGetUnitsDetails";
import { costSwitch } from "../../../helpers/costSwitch";
import Preloader from "../../Preloader/Preloader";
import { BackButton } from "../../BackButton/BackButton";
import { useEffect, useState } from "react";

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
        <div className="category-main-block__details-list details-lis">
          <h2 className="details-list__name">{unitsDetails.name}</h2>
          <p className="details-list__paragraph">{unitsDetails.description}</p>
          <div className="unique-item__cost-block cost-block">
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
          <div className="details-list__data-list data-list">
            <div className="data-list___header-block header-block">
              <p className="header-block__text">Other data:</p>
              <div
                className="header__toggler"
                onClick={() => {
                  setState((prevState) => ({ opened: !prevState.opened }));
                }}
              />
            </div>
            {state.opened ? (
              <ul className="data-list__items">
                <li className="data-list__paragraph">
                  Age: {unitsDetails.age}
                </li>
                <li className="data-list__paragraph">
                  Armor: {unitsDetails.armor}
                </li>
                <li className="data-list__paragraph">
                  Attack: {unitsDetails.attack}
                </li>
                <li className="data-list__paragraph">
                  Attack delay: {unitsDetails.attack_delay}
                </li>
                <li className="data-list__paragraph">
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
