import React from "react";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');
  return (
    <div className="mb-3 me-3 float-end" style={{ width: "30%" }}>
      <input
        type="search"
        className="form-control"
        placeholder="Search"
        value={value}
        onChange={(e)=>setValue(e.target.value)}        
        onKeyDown={() => onSearch(value)}
      />
    </div>
  );
};

export default Search;
