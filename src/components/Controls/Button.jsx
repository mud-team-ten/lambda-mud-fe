import React from "react";
import "nes.css/css/nes.min.css";

const Button = props => {
  return (
    <button type="button" class="nes-btn">
      {props.direction}
    </button>
  );
};

export default Button;
