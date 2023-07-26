import React from "react";
import { useDispatch } from "react-redux";
import { deleteGood, dicrementGood, incrementGood } from "../store/cartSlice";

const BasketItem = ({ brand, model, price, amount, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div
        className="d-flex justify-content-between"
        style={{ width: "500px" }}
      >
        <p>{brand}</p>
        <p>{model}</p>
        <p>{price}</p>
        <i
          className="bi bi-caret-up"
          role="button"
          onClick={() => dispatch(incrementGood(id))}
        ></i>
        <p>{amount}</p>
        <i
          className="bi bi-caret-down"
          role="button"
          onClick={() => dispatch(dicrementGood(id))}
        ></i>
        <p>{+amount * +price}</p>

        <i
          className="bi bi-x-lg"
          role="button"
          onClick={() => dispatch(deleteGood(id))}
        ></i>
      </div>
    </li>
  );
};

export default BasketItem;
