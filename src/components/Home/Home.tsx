import React from "react";
import "./styles.css";

type Props = { children: React.ReactNode };

export const Home: React.FC<Props> = ({ children }) => {
  return (
    <div className="home">
      <div className="logout-block">{children}</div>
      <div className="logo"></div>
      <div className="greeting-banner"></div>
    </div>
  );
};
