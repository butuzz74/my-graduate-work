import React from "react";
import PropTypes from "prop-types";
import { displayDate } from "../../utils/displayDate";

const OrderItem = ({ time, positions, sum, order, goToOrderCard }) => {
    return (
        <li>
            <div
                className="d-flex justify-content-between"
                style={{ width: "500px" }}
            >
                <p role="button" onClick={goToOrderCard}>
                    {order}
                </p>
                <p>{displayDate(time)}</p>
                <p>{positions}</p>
                <p>{sum}</p>
            </div>
        </li>
    );
};
OrderItem.propTypes = {
    time: PropTypes.string,
    positions: PropTypes.string,
    sum: PropTypes.string,
    order: PropTypes.string,
    goToOrderCard: PropTypes.func
};
export default OrderItem;
