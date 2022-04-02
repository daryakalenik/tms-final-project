import React from "react";
import "./styles.scss";

type Props = { children: React.ReactNode };

export const Home: React.FC<Props> = ({ children }) => {
  return (
    <div className="home">
      <div className="home__logout-button">{children}</div>
      <div className="home__logo"></div>
      <div className="home__greeting-banner"></div>
    </div>
  );
};
