import React, { useState } from "react";

const Form = props => {
  const [value, setValue] = useState("");

  const getData = async () => {
    const url = "http://localhost:5000/test";
    const response = await fetch(url);
    const data = await response.text();
    return data;
  }

  const handleClick = async () => {
    const data = await getData();
    setValue(data);
  }

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleClick}>CLICK THE BUTTON</button>
    </div>
  );
}

export default Form;