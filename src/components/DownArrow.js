import React from "react";
import arrow from "./../assets/downArrow.png";

const DownArrow = () => {
  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
      <img src={arrow} alt="arrow" />
    </div>
  );
};

export default DownArrow;
