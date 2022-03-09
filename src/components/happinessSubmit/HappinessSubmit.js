import React from "react";
import submit from "./Submit.svg";
import "./HappinessSubmit.css";
import axios from "axios";

const APIURL = "https://automation.uselab.com/api/fe-test/mood/";

const HappinessSubmit = ({ state, setResponseText }) => {
  const sendMood = async () => {
    const { data } = await axios.post(
      APIURL,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          mood: state.value,
        },
      }
    );
    setResponseText(data.data.text);
  };

  return (
    <div className="submit-button">
      <img
        src={submit}
        alt="Submit"
        onClick={() => {
          sendMood(state.value);
        }}
      />
    </div>
  );
};

export default HappinessSubmit;
