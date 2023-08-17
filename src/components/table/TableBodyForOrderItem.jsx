import React from "react";
import configFile from "../../config/config.json";
import { displayDate } from "../../utils/displayDate";

const TableBodyForOrderItem = ({ number, data }) => {  
  const newData = data.content.map((el, index) => ({
    pos: index + 1,
    idOrder: number,
    dateOrder: displayDate(data.info.time),
    namePos: el.model,
    price: el.price,
    amount: el.amount,
    sumOrder: +(el.price.split(" ").join("")) * +el.amount,
  }));
  return (
    <tbody>
      {newData.map((item, index) => (
        <tr key={item.idOrder + index}>
          {Object.keys(configFile.columsForOrderItem).map((colum) => (
            <td key={colum}>{item[colum]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBodyForOrderItem;
