import React from "react";

import "./SliderImage.css";

const SliderImage = ({ state }) => {
  return (
    <div className="slider-image">
      <img
        src={state.image}
        alt={state.displayState}
        width="234px"
        height="234px"
      />
    </div>
  );
};

export default SliderImage;
