import React from "react";
import "nes.css/css/nes.min.css";

const Button = props => {
  return (
    <button type="button" className="nes-btn">
      {props.direction}
    </button>
  );
};

export default Button;
