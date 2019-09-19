import React from "react";
import Button from "./Button/Button";
import "nes.css/css/nes.min.css";
import "./Controls.css";

function Controls() {
  const dir = {
    left: "&#11207",
    right: "&#11208",
    up: "&#11205",
    down: "&#11206"
  }
  return (
    <div className="controls-wrapper nes-container is-rounded">
      <div className="button-wrapper">
        <Button direction={dir.left} />
        <div className="vertical-buttons">
          <Button direction={dir.up} />
          <Button direction={dir.down} />
        </div>
        <Button direction={dir.right} />
      </div>
    </div>
  );
}

export default Controls;
