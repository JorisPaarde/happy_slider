import React, { useState } from "react";
import "./slider.css";

const Slider = () => {
  const [happyness, setHappyness] = useState(3);

  return (
    <div>
      <input
        type="range"
        min="1"
        max="5"
        value={happyness}
        class="slider"
        id="myRange"
        onChange={(e) => {
          setHappyness(e.target.value);
        }}
      ></input>
      {happyness}
    </div>
  );
};

export default Slider;
