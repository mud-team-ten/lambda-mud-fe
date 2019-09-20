import React from "react";
import Button from "./Button/Button";
import "nes.css/css/nes.min.css";
import "./Controls.css";

function Controls() {
  return (
    <div className="controls-wrapper nes-container is-rounded">
      <div className="button-wrapper">
        <Button direction="w" />
        <div className="vertical-buttons">
          <Button direction="n" />
          <Button direction="s" />
        </div>
        <Button direction="e" />
      </div>
    </div>
  );
}

export default Controls;
