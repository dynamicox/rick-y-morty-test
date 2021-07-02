/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import StatusLabel from "./StatusLabel";

export const Card = ({ charInfo }) => {
  return (
    <div className="main__card">
      <div>
        <img
          src={charInfo.image}
          alt={charInfo.name}
          width="100%"
          height="100%"
        />
      </div>
      <div className="main__cardBody">
        <h5>{charInfo.name}</h5>
        <ul>
          <li>{charInfo.gender}</li>
          <li>{charInfo.origin.name}</li>
          <li>{charInfo.type}</li>
        </ul>
        {charInfo.status !== "unknown" && (
          <StatusLabel status={charInfo.status} />
        )}
      </div>
    </div>
  );
};
