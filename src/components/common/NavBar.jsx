import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar d-flex flex-wrap justify-content-around">
      <div className="text-white">
        <h3>OOO "Системы отображения информации</h3>
      </div>
      <div>
        <ul className="nav nav-pills mt-2 d-flex justify-content-end">
          <li className="nav-item">
            <NavLink
              to="/paymentAndDelivery"
              className="nav-link text-decoration-underline"
              activeClassName="selected"
              style={{ color: "white" }}
            >
              Payment and delivery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/aboutUs"
              className="nav-link text-decoration-underline"
              activeClassName="selected"
              style={{ color: "white" }}
            >
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contactInfo"
              className="nav-link text-decoration-underline"
              activeClassName="selected"
              style={{ color: "white" }}
            >
              Contacts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/signin"
              className="nav-link text-decoration-underline"
              activeClassName="selected"
              style={{ color: "white" }}
            >
              Sign in/Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
