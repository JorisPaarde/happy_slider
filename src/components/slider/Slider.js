import React from "react";
import "./Slider.css";
import HappinessSubmit from "../happinessSubmit/HappinessSubmit";

import arrow from "./Tooltip_arrow.svg";

const Slider = ({ sliderValue, setSlidervalue }) => {
  return (
    <div>
      <img src={arrow} alt="arrow" />
      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="5"
          value={sliderValue}
          className="slider"
          id="myRange"
          onChange={(e) => {
            setSlidervalue(e.target.value);
          }}
        />
        <HappinessSubmit />
      </div>
    </div>
  );
};

export default Slider;
