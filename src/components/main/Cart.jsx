import React from "react";
// import { NavLink } from "react-router-dom";

const Cart = ({ countCart, getAccessInCart, onClearCart }) => {  
  return (
    <div
      // to="/basket"
      className="nav-link text-decoration-underline"
      style={{ color: "white" }}
    >
      <i
        className={countCart === 0 ? "bi bi-cart" : "bi bi-cart-fill"}
        style={{ color: "white" }}
        role="button"
        onClick={getAccessInCart}
      >
        {" "}
        Cart {countCart}
      </i>
      <i
        className={
          countCart === 0 ? "bi bi-trash ms-1" : "bi bi-trash-fill ms-1"
        }
        role="button"
        onClick={onClearCart}
      ></i>
    </div>
  );
};

export default Cart;
