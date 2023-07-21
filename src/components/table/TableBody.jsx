import React from "react";
import configFile from "../../config/config.json";
import { displayDate } from "../../utils/displayDate";

const TableBody = ({ data }) => {
  const newData = Object.keys(data).map((el, index) => ({
    pos: index + 1,
    idOrder: <p role="button">{el}</p>,
    dateOrder: displayDate(data[el].info.time),
    amount: <p className="text-center">{data[el].content.length}</p>,
    sumOrder: data[el].info.totalPriceOrder,
  }));
  console.log(newData);

  return (
    <tbody>
      {Object.values(newData).map((item) => (
        <tr key={item.idOrder}>
          {Object.keys(configFile.colums).map((colum) => (
            <td key={colum}>{item[colum]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
