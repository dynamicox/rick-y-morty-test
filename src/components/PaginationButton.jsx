/* eslint-disable react/prop-types */
import React from "react";

const PaginationButton = ({ changePage, page, children }) => {
  return (
    <button
      disabled={page === null}
      onClick={() => {
        changePage(page);
      }}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
