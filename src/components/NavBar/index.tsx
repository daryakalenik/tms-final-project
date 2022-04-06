import { NavLink } from "react-router-dom";
import "./styles.scss";

export const NavBar: React.FC = () => {
  return (
    <div>
      <header className="header">
        <nav className="menu header__menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu__item menu__item--active" : "menu__item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/civilizations"
            className={({ isActive }) =>
              isActive ? "menu__item menu__item--active" : "menu__item"
            }
          >
            Civilizations
          </NavLink>
          <NavLink
            to="/units"
            className={({ isActive }) =>
              isActive ? "menu__item menu__item--active" : "menu__item"
            }
          >
            Units
          </NavLink>
          <NavLink
            to="/structures"
            className={({ isActive }) =>
              isActive ? "menu__item menu__item--active" : "menu__item"
            }
          >
            Structures
          </NavLink>
          <NavLink
            to="/technologies"
            className={({ isActive }) =>
              isActive ? "menu__item menu__item--active" : "menu__item"
            }
          >
            Technologies
          </NavLink>
        </nav>
      </header>
    </div>
  );
};
