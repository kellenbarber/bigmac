// RandomCountryResults.js

import React from "react";
import "./styles.css";

const RandomCountryResults = props => {
    const {
        bigMacData,
        amount,
        localDollarPrice
    } = props;

    // (calculation is (INPUT / local price) * (local dollarprice / RAND COUNTRY dollar price) 
    const numberOfBigMacs = (amount / bigMacData.LocalPrice) * (localDollarPrice / bigMacData.DollarPrice);
    // (Calculation is [INPUT] * (local dollar price / RANDCOUNTRY dollar price)) 
    const currencyValue = amount * (localDollarPrice / bigMacData.DollarPrice);

    return props.bigMacData ? (
        <div className={"randomCountryResults"}>
            <h2>Random Country: </h2>
            <p>You could buy {Math.floor(numberOfBigMacs)} of Big Macs in {bigMacData.Country} with {amount}!</p>
            <p>Your {amount} is worth about {currencyValue.toFixed(2)} in {bigMacData.Country}.</p>
        </div>
    ) : null;
};

export default RandomCountryResults;