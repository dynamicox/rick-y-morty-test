import React, { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { Card } from "./components/Card";
import useFetch from "./hooks/useFetch";
import Pagination from "./components/Pagination";
import { useData } from "./hooks/useDataContext";

function App() {
  const { charInfo, fetchCharInfo } = useData();

  useEffect(() => {
    const fetchData = async () => {
      fetchCharInfo("https://rickandmortyapi.com/api/character");
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="main__cardContainer">
        {charInfo ? (
          charInfo.map((data, idx) => {
            return <Card key={idx} charInfo={data} />;
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Pagination />
    </>
  );
}

export default App;
