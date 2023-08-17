import React from "react";
import configFile from "../../config/config.json";
import { useDispatch } from "react-redux";
import {
  deleteGood,
  dicrementGood,
  incrementGood,
} from "../../store/cartSlice";

const TableBodyForBasketList = ({ data }) => {
  const dispatch = useDispatch();
  const newData = data.map((el, index) => ({
    pos: index + 1,
    brand: el.brand,
    model: el.model,
    price: el.price,
    amount: (
      <div className="d-flex justify-content-between align-items-center">
        <i
          className="bi bi-caret-up"
          role="button"
          onClick={() => dispatch(incrementGood(el.id))}
        ></i>
        {el.amount}
        <i
          className="bi bi-caret-down"
          role="button"
          onClick={() => dispatch(dicrementGood(el.id))}
        ></i>
      </div>
    ),
    sumOrder: +(el.price.split(" ").join("")) * +el.amount,
    delete: (
      <div className="d-flex justify-content-center align-items-center">
      <i
        className="bi bi-x-lg"
        role="button"
        onClick={() => dispatch(deleteGood(el.id))}
      ></i>

      </div>
    ),
  }));
  return (
    <tbody>
      {newData.map((item, index) => (
        <tr key={index}>
          {Object.keys(configFile.columsForBasketItem).map((colum) => (
            <td key={colum}>{item[colum]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodyForBasketList;
