import React from "react";

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

export default Search;
