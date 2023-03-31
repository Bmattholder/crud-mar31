import React from "react";

import "./Filter.css";

function Filter({ peopleList, onFilterChange }) {
  const uniqueNames = [
    ...new Set(
      peopleList.map((person) => person.personalName.givenNames[0].value)
    ),
  ];

  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter-container">
      <label htmlFor="filter-select">Filter by First Name: </label>
      <select id="filter-select" onChange={handleFilterChange}>
        <option value="">All</option>
        {uniqueNames.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
