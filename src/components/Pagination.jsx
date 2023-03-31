import React from "react";

import "./Pagination.css";

function Pagination({ page, totalPages, onPageChange }) {
  const pageNumbers = Array.from(Array(totalPages).keys());

  return (
    <div>
      <button disabled={page === 0} onClick={() => onPageChange(page - 1)}>
        Prev
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === page ? "active" : ""}
        >
          {pageNumber + 1}
        </button>
      ))}
      <button
        disabled={page === totalPages - 1}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
