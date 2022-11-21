import React from "react";
import "./CardFooter.css";

// CardFooter display the last updated time info
const CardFooter = ({ date }) => {
  return <div className="card-footer">Last updated: {date}</div>;
};

export default CardFooter;
