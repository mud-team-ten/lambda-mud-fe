import React from "react";
import "nes.css/css/nes.min.css";
import "./Button.css";

function Button(props) {
  const setDirection = () => {
    return { __html: props.direction };
  };
  return (
    <button
      type="button"
      className="nes-btn directional-button"
      dangerouslySetInnerHTML={setDirection()}
    />
  );
}

export default Button;
