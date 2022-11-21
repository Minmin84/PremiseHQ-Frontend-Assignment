import React from "react";
import CardButtonGroup from "../../ButtonComponent/CardButtonGroup/CardButtonGroup";
import "./CardBody.css";

// CardBody contains title, subtitle and CardButtonGroup
const CardBody = ({ title, subtitle }) => {
  return (
    <div className="card-body">
      <h1 className="title"> {title} </h1>
      <h2 className="subtitle"> {subtitle} </h2>
      <CardButtonGroup />
    </div>
  );
};

export default CardBody;
