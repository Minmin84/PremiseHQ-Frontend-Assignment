import React from "react";
import "./CardHeader.css";
import boltIcon from "../../../assets/images/boltIcon.svg";

// Render different CardHeader based on originType
const CardHeader = ({ originType }) => {
  const isAutomated = originType === "automated";
  const isManual = originType === "manual";
  return (
    <div className="card-header">
      {isAutomated ? <Automated /> : null}
      {isManual ? <Manual /> : null}
    </div>
  );
};

// Automated origin card header
const Automated = () => (
  <div className="automated">
    <img src={boltIcon} alt="Bolt Icon" />
    Automated Origin
  </div>
);

// Manual origin card header
const Manual = () => <div className="manual"> Manual Origin </div>;

export default CardHeader;
