import React, { useState } from "react";
import CustomerList from "./CustomerList";
import List from "../List";

function SearchCustomer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState(List);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === "") {
      setFilteredCustomers(List);
    } else {
      const filtered = List.filter((customer) =>
        Object.values(customer).some(
          (value) => String(value).startsWith(term) // case-sensitive match
        )
      );
      setFilteredCustomers(filtered);
    }
  };

  return (
    <>
      <div className="layout-row align-items-center justify-content-center mt-30">
        <input
          className="large mx-20 w-20"
          data-testid="search-input"
          type="text"
          value={searchTerm}
          placeholder="Enter search term (Eg: Phil)"
          onChange={handleSearch}
        />
      </div>
      <CustomerList customers={filteredCustomers} />
    </>
  );
}

export default SearchCustomer;
