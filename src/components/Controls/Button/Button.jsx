import React from "react";
import "nes.css/css/nes.min.css";
import "./Button.css"

const Button = props => {
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
};

export default Button;
