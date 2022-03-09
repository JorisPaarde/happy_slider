import React from "react";
import "./Slider.css";

const Slider = ({ sliderValue, setSlidervalue }) => {
  return (
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
      ></input>
    </div>
  );
};

export default Slider;
