import React from "react";

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

export default TableHeader;
