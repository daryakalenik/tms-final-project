import { useGetStructuresDetails } from "./hooks/useGetStructuresDetails";
import { costSwitch } from "../../../helpers/costSwitch";
import Preloader from "../../Preloader/Preloader";
import { useEffect } from "react";

export const StructuresDetails: React.FC = () => {
  const { fetchStructuresDetails, navigate, structuresDetails } =
    useGetStructuresDetails();

  useEffect(() => {
    fetchStructuresDetails();
  }, []);

  return (
    <div className="main-block">
      <div className="btn-back-block">
        <button className="btn-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
      {structuresDetails ? (
        <div className="details-block">
          <h2>{structuresDetails.name}</h2>

          {structuresDetails.cost
            ? Object.entries(structuresDetails.cost).map(([key, value]) => {
                return (
                  <div className="cost-block">
                    <img src={costSwitch(key)} width="70px" />
                    <p>{value}</p>
                  </div>
                );
              })
            : null}

          <h4>Other data</h4>
          <ul>
            <li>Build time: {structuresDetails.build_time}</li>
            <li>Hit Points: {structuresDetails.hit_points}</li>
            <li>Line of Sight: {structuresDetails.line_of_sight}</li>
            <li>Armor: {structuresDetails.armor}</li>
            <li>Age: {structuresDetails.age}</li>
          </ul>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};
