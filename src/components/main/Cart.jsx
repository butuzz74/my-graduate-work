import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";

import "../../css/tooltip.css";

const Cart = ({ countCart, getAccessInCart, onClearCart }) => {
    return (
        <div
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
                    countCart === 0
                        ? "bi bi-trash ms-1"
                        : "bi bi-trash-fill ms-1"
                }
                data-tooltip-id="trash"
                data-tooltip-content="Очистить корзину!"
                role="button"
                onClick={onClearCart}
            ></i>
            <Tooltip id="trash" style={{ backgroundColor: "#6610f2", zIndex: "1000" }} />
        </div>
    );
};
Cart.propTypes = {
    countCart: PropTypes.number,
    getAccessInCart: PropTypes.func,
    onClearCart: PropTypes.any
};
export default Cart;
