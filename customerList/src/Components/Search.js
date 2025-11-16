import React from "react";

function Search({ filter, setFilter }) {
  return (
    <input
      data-testid="filterInput"
      className="large"
      placeholder="Enter Country Name"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

export default Search;
