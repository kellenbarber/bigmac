// Form.js

import React from "react";

import "./styles.css";
import getBigMacs from "./getBigMacs";

const Form = props => {
  const {
    country,
    updateBigMacs,
    updateCurrencyAmount
  } = props;

  const handleChange = event => {
    updateCurrencyAmount(event.target.value);
  }

  const handleClick = async () => {
    getBigMacs().then(bigMacs => {
      updateBigMacs(bigMacs);
  });
  }

  return country ? (
    <div>
        <h1 className={"countryHeader"}>You are in {country === "United States" ? "the" : null} {country}</h1>
        <label for="money">Please enter an amount of money in your local currency:</label>
        <input type="text" name="money" onChange={handleChange}></input>
        <button onClick={handleClick}>Get BigMac Data</button>
    </div>
  ) : null;
};

export default Form;