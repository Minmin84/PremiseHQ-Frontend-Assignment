import React from "react";
import { ViewButton, RemoveButton } from "../Buttons/Button";
import "./CardButtonGroup.css";

// CardButtonGroup is used to hold various buttons for card
const CardButtonGroup = () => {
  return (
    <div className="buttons">
      <ViewButton />
      <div className="divider" />
      <RemoveButton />
    </div>
  );
};

export default CardButtonGroup;
