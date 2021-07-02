import React from "react";
import { useData } from "../hooks/useDataContext";
import PaginationButton from "./PaginationButton";

const Pagination = () => {
  const { dataInfo, fetchCharInfo } = useData();

  const changePage = async (url) => {
    await fetchCharInfo(url);
  };

  return (
    dataInfo && (
      <div className="main__pagination">
        <PaginationButton changePage={changePage} page={dataInfo.prev}>
          Previous
        </PaginationButton>
        <PaginationButton changePage={changePage} page={dataInfo.next}>
          Next
        </PaginationButton>
      </div>
    )
  );
};

export default Pagination;
