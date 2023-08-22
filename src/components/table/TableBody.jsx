import React from "react";
import configFile from "../../config/config.json";
import { displayDate } from "../../utils/displayDate";
import { useSelector } from "react-redux";
import { getOrderItemById } from "../../store/orderSlice";
import { useHistory } from "react-router-dom";

const TableBody = ({ data }) => {    
  const history = useHistory();
  // const newData = Object.keys(data).map((el, index) => ({
  //   pos: index + 1,
  //   idOrder: <p role="button" onClick={()=>(history.push(`/order/${el}`))}>{el}</p>,
  //   dateOrder: displayDate(data[el].info.time),
  //   amount: <p className="text-center">{data[el].content.length}</p>,
  //   sumOrder: data[el].info.totalPriceOrder,
  // }));
  const newData = data.map((el, index) => ({
    pos: index + 1,
    idOrder: (
      <p role="button" onClick={() => history.push(`/order/${el._id}`)}>
        {el._id}
      </p>
    ),
    dateOrder: displayDate(el.time),
    amount: <p className="text-center">{el.content.length}</p>,
    sumOrder: el.totalPriceOrder,
  }));  
  return (
    <tbody>
      {newData.map((item, index) => (
        <tr key={item.idOrder + index}>
          {Object.keys(configFile.columsForOrderList).map((colum) => (
            <td key={colum}>{item[colum]}</td>
          ))}
        </tr>
      ))}
      {/* {Object.values(newData).map((item, index) => (
        <tr key={item.idOrder+index}>
          {Object.keys(configFile.columsForOrderList).map((colum) => (
            <td key={colum}>{item[colum]}</td>
          ))}
        </tr>
      ))} */}
    </tbody>
  );
};

export default TableBody;
