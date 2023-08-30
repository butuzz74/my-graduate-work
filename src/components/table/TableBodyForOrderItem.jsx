import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import configFile from "../../config/config.json";
import { displayDate } from "../../utils/displayDate";

const TableBodyForOrderItem = ({ data }) => {
    const history = useHistory();
    const newData = data.content.map((el, index) => ({
        pos: index + 1,
        idOrder: el._id,
        dateOrder: displayDate(data.time),
        namePos: el.model,
        price: el.price,
        amount: (
            <div className="d-flex justify-content-center align-items-center">
                {el.amount}
            </div>
        ),
        sumOrder: +el.price.split(" ").join("") * +el.amount
    }));
    return (
        <tbody>
            {newData.map((item, index) => (
                <tr
                    key={item.idOrder + index}
                    role="button"
                    onClick={() => history.push(`/${item.idOrder}`)}
                >
                    {Object.keys(configFile.columsForOrderItem).map((colum) => (
                        <td key={colum}>{item[colum]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
TableBodyForOrderItem.propTypes = {
    data: PropTypes.object
};
export default TableBodyForOrderItem;
