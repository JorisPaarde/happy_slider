import React from "react";
import Slider from "./slider/Slider.js";
import "./App.css";
import SliderImage from "./sliderImage/SliderImage.js";
import { useState } from "react";

import notHappyAtAll from "../States/happyhead-0-not-happy-at-all-Icon/Happyhead/0-not-happy-at-all.svg";
import notHappy from "../States/happyhead-1-not-happy-Icon/Happyhead/1-not-happy.svg";
import neutral from "../States/happyhead-3-neutral-Icon/Happyhead/3-neutral.svg";
import happy from "../States/happyhead-4-pretty-happy-Icon/Happyhead/4-pretty-happy.svg";
import superHappy from "../States/happyhead-5-super-happy-Icon/Happyhead/5-super-happy.svg";

const states = [
  {
    value: 1,
    image: notHappyAtAll,
    state: "not happy at all",
    text: "You grumpy old bastard",
  },
  {
    value: 2,
    image: notHappy,
    state: "not happy",
    text: "Didn't sleep well?",
  },
  {
    value: 3,
    image: neutral,
    state: "neutral",
    text: "Why so serious?",
  },
  {
    value: 4,
    image: happy,
    state: "happy",
    text: "Always nice to see a smile on your face!",
  },
  {
    value: 5,
    image: superHappy,
    state: "super happy",
    text: "Whoohoo! Party on!",
  },
];

const App = () => {
  const [sliderValue, setSlidervalue] = useState(3);

  return (
    <div className="container happy-slider text-light text-center">
      <h1 className="fw-light text-center mb-5">Happiness Slider</h1>
      <SliderImage state={states[sliderValue - 1]} />
      <h2 className="fw-light text-center my-5">
        I'm feeling {states[sliderValue - 1].state}.
      </h2>
      <Slider sliderValue={sliderValue} setSlidervalue={setSlidervalue} />
    </div>
  );
};

export default App;
