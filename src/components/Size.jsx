import React from "react";

import "./Size.css";
function Size({ size, onSizeChange }) {
  const handleSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    onSizeChange(newSize);
  };

  return (
    <span className="pagination-span">
      Select{" "}
      <select value={size} onChange={handleSizeChange}>
        <option value={3}>3</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>{" "}
      People
    </span>
  );
}

export default Size;
