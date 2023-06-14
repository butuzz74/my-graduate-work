import React, { useContext } from "react";
import { MainPageContext } from "../context/context";

const BasketItem = ({ brand, model, price, amount, id }) => {
  const { incrementCountItem, dicrementCountItem, deleteItem } =
    useContext(MainPageContext);

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
          onClick={() => incrementCountItem(id)}
        ></i>
        <p>{amount}</p>
        <i
          className="bi bi-caret-down"
          role="button"
          onClick={() => dicrementCountItem(id)}
        ></i>
        <p>{+amount * +price}</p>
        <i className="bi bi-x-lg" role="button" onClick={()=>deleteItem(id)}></i>
      </div>
    </li>
  );
};

export default BasketItem;
