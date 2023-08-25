import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onSearch }) => {
    return (
        <div className="mb-3 me-3 float-end" style={{ width: "30%" }}>
            <input
                type="search"
                className="form-control"
                placeholder="Search"
                value={value}
                onChange={onSearch}
            />
        </div>
    );
};
Search.propTypes = {
    value: PropTypes.string,
    onSearch: PropTypes.func
};
export default Search;
