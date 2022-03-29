import { useGetUnitsDetails } from "./hooks/useGetUnitsDetails";
import { costSwitch } from "../../../helpers/costSwitch";
import Preloader from "../../Preloader/Preloader";
import { useEffect, useState } from "react";

export const UnitsDetails: React.FC = () => {
  const { fetchUnitsDetails, unitsDetails, navigate } = useGetUnitsDetails();
  const [state, setState] = useState({ opened: false });
  useEffect(() => {
    fetchUnitsDetails();
  }, [fetchUnitsDetails]);

  return (
    <div className="main-block">
      <div className="btn-back-block">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      {unitsDetails ? (
        <div className="details-block">
          <h2>{unitsDetails["name"]}</h2>
          <h3>{unitsDetails["description"]}</h3>
          <div>
            {unitsDetails["cost"] ? (
              Object.entries(unitsDetails["cost"]).map(([key, value]) => {
                return (
                  <div className="cost-block">
                    <img src={costSwitch(key)} width="70px" />
                    <p>{value}</p>
                  </div>
                );
              })
            ) : (
              <Preloader />
            )}
          </div>
          <div>
            <div className="toggler-wrapper">
              <h4>Other data</h4>
              <div
                className="special-list-toggler"
                onClick={() => {
                  setState((prevState) => ({ opened: !prevState.opened }));
                }}
              />
            </div>
            {state.opened ? (
              <ul>
                <li>Age: {unitsDetails["age"]}</li>
                <li>Armor: {unitsDetails["armor"]}</li>
                <li>Attack: {unitsDetails["attack"]}</li>
                <li>Attack delay: {unitsDetails["attack_delay"]}</li>
                <li>Build time: {unitsDetails["build_time"]}</li>
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
