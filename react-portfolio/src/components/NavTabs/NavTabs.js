import React from "react";
import { NavLink } from "react-router-dom";
import SunIcon from "../switch/icons/sunIcon";
import MoonIcon from "../switch/icons/moonIcon";
import Switch from "../switch/switch";
import styled from "styled-components";
import "./style.css";

function NavTabs({ theme, toggleTheme, isDarkTheme }) {

  const StyledNavTabs = styled.nav`
  .theme-switch {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 1rem;
  }
`;

  const navbarClass = theme === "dark" ? "dark-theme" : "light-theme";
  return (
    <ul className={`nav nav-tabs ${navbarClass}`}>
      <li className={`nav-item btn-grad ${navbarClass}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="portfolio"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li>
      <div className="theme-switch">
  <SunIcon />
  <Switch toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
  <MoonIcon />
</div>

    </ul>
  );
}

export default NavTabs;
