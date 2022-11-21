import React from "react";
import CardHeader from "./CardHeaderComponent/CardHeader";
import CardBody from "./CardBodyComponent/CardBody";
import CardFooter from "./CardFooterComponent/CardFooter";
import "./Card.css";

// Card is the template components to display cards based on data
const Card = ({ originType, title, subtitle, date }) => {
  return (
    <div className="card">
      <CardHeader originType={originType} />
      <CardBody title={title} subtitle={subtitle} />
      <CardFooter date={date} />
    </div>
  );
};

export default Card;
