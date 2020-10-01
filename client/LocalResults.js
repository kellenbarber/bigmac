// LocalResults.js

import React from "react";
import "./styles.css";

const LocalResults = props => {
    const {
        bigMacData,
        amount
    } = props;

    // using Math.floor because you can't buy a fractional Big Mac
    const localNumberOfBigMacs = Math.floor(amount / bigMacData.CurrentCountry?.DollarPrice);
    const purchasingParity = bigMacData.CurrentCountry?.DollarPPP;

    return props ? (
        <div className={"localResults"}>
            <h2>You could buy {localNumberOfBigMacs} of Big Macs in your country.</h2>
            <p>Your Dollar Purchasing Parity is {purchasingParity}</p>
        </div>
    ) : null;
};

export default LocalResults;