import React, { useState } from "react";
import "./styles.css";

const Form = props => {
  const {
    country
  } = props;
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleClick = async () => {
    
  }

  return country ? (
    <div>
        <h1 className={"test"}>{`You are in ${country}`}</h1>
        <label for="money">Please enter an amount of money in your local currency:</label>
        <input type="text" name="money" onChange={handleChange}></input>
        <button onClick={handleClick}>Get BigMac Data</button>
    </div>
  ) : null;
}

export default Form;