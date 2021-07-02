import React from "react";
/* eslint-disable react/prop-types */
const StatusLabel = ({ status }) => {
  let labelColor;
  switch (status) {
    case "Alive":
      labelColor = "label__green";
      break;
    case "Dead":
      labelColor = "label__red";
      break;
    default:
      break;
  }

  return <div className={`status__badge ${labelColor}`}>{status}</div>;
};

export default StatusLabel;
