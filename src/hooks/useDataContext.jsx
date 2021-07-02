/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const DataContext = React.createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataContextProvider = ({ children }) => {
  const [charInfo, setCharInfo] = useState(null);
  const [dataInfo, setDataInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCharInfo = async (url) => {
    try {
      const data = await useFetch(url);
      setCharInfo(data.results || []);
      setDataInfo(data.info || {});
    } catch (error) {
      console.error(error);
    }
  };

  let value = {
    charInfo,
    setCharInfo,
    setDataInfo,
    dataInfo,
    fetchCharInfo,
  };

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
};
