import React from "react";
// import { NavLink } from "react-router-dom";

const Cart = ({ countCart, getAccessInCart }) => {
  return (
    <div
      // to="/basket"
      className="nav-link text-decoration-underline"      
      style={{ color: "white" }}
    >
      <i className="bi bi-cart" style={{ color: "white" }} role="button" onClick={getAccessInCart}>
        {" "}
        Cart {countCart}
      </i>
    </div>
  );
};

export default Cart;
