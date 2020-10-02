// RandomCountryResults.js

import React from "react";
import "./styles.css";

const RandomCountryResults = props => {
    const {
        bigMacData,
        amount
    } = props;

    // (calculation is (INPUT / local price) * (local dollarprice / RAND COUNTRY dollar price) 
    const numberOfBigMacs = (amount / bigMacData.LocalPrice) * (bigMacData.LocalPrice / bigMacData.DollarPrice);
    // (Calculation is [INPUT] * (local dollar price / RANDCOUNTRY dollar price)) 
    const currencyValue = amount * (bigMacData.LocalPrice / bigMacData.DollarPrice);

    return (
        <div className={"randomCountryResults"}>
            <h2>Random Country: </h2>
            <p>You could buy {Math.floor(numberOfBigMacs)} Big Macs in {bigMacData.Country} with {amount}!</p>
            <p>Your {amount} is worth about {currencyValue.toFixed(2)} in {bigMacData.Country}.</p>
        </div>
    );
};

export default RandomCountryResults;