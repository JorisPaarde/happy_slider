import React from "react";
import Slider from "./slider/Slider.js";
import "./App.css";
import SliderImage from "./sliderImage/SliderImage.js";
import { useState } from "react";

// imports for images for happiness states
import notHappyAtAll from "../States/happyhead-0-not-happy-at-all-Icon/Happyhead/0-not-happy-at-all.svg";
import notHappy from "../States/happyhead-1-not-happy-Icon/Happyhead/1-not-happy.svg";
import neutral from "../States/happyhead-3-neutral-Icon/Happyhead/3-neutral.svg";
import happy from "../States/happyhead-4-pretty-happy-Icon/Happyhead/4-pretty-happy.svg";
import superHappy from "../States/happyhead-5-super-happy-Icon/Happyhead/5-super-happy.svg";

// all different states of happiness
const states = [
  {
    value: 1,
    image: notHappyAtAll,
    displayState: "not happy at all",
  },
  {
    value: 2,
    image: notHappy,
    displayState: "not happy",
  },
  {
    value: 3,
    image: neutral,
    displayState: "neutral",
  },
  {
    value: 4,
    image: happy,
    displayState: "happy",
  },
  {
    value: 5,
    image: superHappy,
    displayState: "super happy",
  },
];

const App = () => {
  const [sliderValue, setSlidervalue] = useState(3);
  const [responseText, setResponseText] = useState(null);
  const currentState = states[sliderValue - 1];

  if (responseText) {
    return (
      <div className="container happy-slider response-screen text-light text-center">
        <div className="row">
          <div className="col-6 offset-3">
            <h1 className="fw-light text-center mb-5">{responseText}</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container happy-slider text-light text-center">
      <h1 className="fw-light text-center mb-5">Happiness Slider</h1>
      <SliderImage state={currentState} />
      <h2 className="fw-light text-center my-5">
        I'm feeling {currentState.displayState}.
      </h2>
      <Slider
        sliderValue={sliderValue}
        setResponseText={setResponseText}
        setSlidervalue={setSlidervalue}
        state={currentState}
      />
    </div>
  );
};

export default App;
