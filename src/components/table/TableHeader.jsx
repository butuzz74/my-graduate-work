import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ date }) => {
    return (
        <thead className="border-bottom-0 border-2">
            <tr>
                {Object.keys(date).map((colum) => (
                    <th key={colum}>{date[colum]}</th>
                ))}
            </tr>
        </thead>
    );
};
TableHeader.propTypes = {
    date: PropTypes.object
};
export default TableHeader;
