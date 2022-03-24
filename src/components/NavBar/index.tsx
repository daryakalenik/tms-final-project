import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import React, { useContext } from "react";
import "./styles.css";

export const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " " + "nav-item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/civilizations"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " " + "nav-item"
          }
        >
          Civilizations
        </NavLink>
        <NavLink
          to="/units"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " " + "nav-item"
          }
        >
          Units
        </NavLink>
        <NavLink
          to="/structures"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " " + "nav-item"
          }
        >
          Structures
        </NavLink>
        <NavLink
          to="/technologies"
          className={({ isActive }) =>
            (isActive ? "active" : "") + " " + "nav-item"
          }
        >
          Technologies
        </NavLink>
      </nav>
    </div>
  );
};
