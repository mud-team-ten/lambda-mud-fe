import React from "react";
import Button from "./Button/Button";
import "./Controls.css";

const Controls = () => {

  return (
    <div className="button-wrapper">
      <Button direction="&#8592" />
      <div className="vertical-buttons">
        <Button direction="&#8593" />
        <Button direction="&#8595" />
      </div>
      <Button direction="&#8594" />
    </div>
  );
};

export default Controls;
