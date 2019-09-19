import React from "react";
import Button from "./Button/Button";
import "nes.css/css/nes.min.css";
import "./Controls.css";

function Controls() {
  return (
    <div className="controls-wrapper nes-container is-rounded">
      <div className="button-wrapper">
        <Button direction="&#8592" />
        <div className="vertical-buttons">
          <Button direction="&#8593" />
          <Button direction="&#8595" />
        </div>
        <Button direction="&#8594" />
      </div>
    </div>
  );
}

export default Controls;
