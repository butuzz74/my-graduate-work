import React from "react";
import PropTypes from "prop-types";
import configFile from "../../config/config.json";
import { displayDate } from "../../utils/displayDate";
import { useHistory } from "react-router-dom";

const TableBody = ({ data }) => {
    const history = useHistory();
    const newData = data.map((el, index) => ({
        pos: index + 1,
        idOrder: (
            <div
                className="d-flex justify-content-center align-items-center"
                role="button"
                onClick={() => history.push(`/order/${el._id}`)}
            >
                {el._id}
            </div>
        ),
        dateOrder: displayDate(el.time),
        amount: (
            <div className="d-flex justify-content-center align-items-center">
                {el.content.length}
            </div>
        ),
        sumOrder: el.totalPriceOrder
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
        </tbody>
    );
};
TableBody.propTypes = {
    data: PropTypes.array
};
export default TableBody;
