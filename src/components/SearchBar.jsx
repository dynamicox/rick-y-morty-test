import React from "react";
import { useData } from "../hooks/useDataContext";

export const SearchBar = () => {
  const { fetchCharInfo } = useData();

  const fetchData = async (url) => {
    await fetchCharInfo(url);
  };

  return (
    <div className="main__searchBar">
      <input
        placeholder="Search..."
        onChange={(e) => {
          fetchData(
            `https://rickandmortyapi.com/api/character/?name=${e.target.value}`,
          );
        }}
      />
    </div>
  );
};
