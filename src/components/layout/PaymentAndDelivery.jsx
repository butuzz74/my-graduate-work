import React from 'react';
import {NavLink} from "react-router-dom"

const PaymentAndDelivery = () => {
    return (
        <>
          <h1>Контакты</h1>
          <button type="button" className="btn btn-success">
            <NavLink
              to="/"
              className="nav-link text-decoration-underline"
              activeClassName="selected"
              style={{ color: "white" }}
            >
              На главную страницу
            </NavLink>
          </button>
        </>
      );
}
 
export default PaymentAndDelivery;
