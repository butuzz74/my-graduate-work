import React, { useRef } from "react";
import getTooltip from "../../utils/tooltip";
import "../../css/tooltip.css";

// import { NavLink } from "react-router-dom";

const Cart = ({ countCart, getAccessInCart, onClearCart }) => {
    const ref = useRef();

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
                    countCart === 0
                        ? "bi bi-trash ms-1"
                        : "bi bi-trash-fill ms-1"
                }
                ref={ref}
                data-bs-toggle={getTooltip(ref)}
                data-bs-custom-class="custom-tooltip"
                data-bs-title="Очистить корзину"
                role="button"
                onClick={onClearCart}
            ></i>
        </div>
    );
};

export default Cart;
