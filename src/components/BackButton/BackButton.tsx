import { NavigateFunction, useNavigate } from "react-router-dom";
import "./styles.scss";

export const BackButton: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <div className="back-block">
      <button className="back-block__button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
};
