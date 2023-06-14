import React from "react";
import { NavLink } from "react-router-dom";

const Cart = ({ countCart }) => {
  return (
    <NavLink
      to="/basket"
      className="nav-link text-decoration-underline"
      activeClassName="selected"
      style={{ color: "white" }}
    >
      <i className="bi bi-cart" style={{ color: "white" }}>
        {" "}
        Cart {countCart}
      </i>
    </NavLink>
  );
};

export default Cart;
