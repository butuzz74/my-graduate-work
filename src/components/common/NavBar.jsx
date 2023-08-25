import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Avatar from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoggedIn, logOut } from "../../store/usersSlice";
import { clearListOrder } from "../../store/orderSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(getIsLoggedIn());  
  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(clearListOrder());
    history.push("/") 
  }
  
  return (
    <div className="navbar">
      <div className="navheader text-white">
        <p>OOO "Системы отображения информации"</p>
      </div>
      <div className="navline">
        <ul className="nav nav-pills mt-2 d-flex justify-content-center me-5">
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
      {currentUser ? <Avatar avatarName={currentUser.nick.substring(0,1).toUpperCase()} logOut={handleLogOut} /> : null}
    </div>
  );
};

export default NavBar;
