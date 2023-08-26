import React from "react";
import { RotatingLines } from "react-loader-spinner";

const ButtonLoadingAnimation = () => {
  return (
    <RotatingLines
      strokeColor="#fff"
      strokeWidth="5"
      animationDuration="0.75"
      width="32"
      visible={true}
    />
  );
};

export default ButtonLoadingAnimation;
