// bigmac.js

import axios from "axios";
import {EOL} from "os";

import {BIGMAC_ERROR} from "./constants";

const getBigMacData = async () => {
    try {
        const response = axios.get("https://raw.githubusercontent.com/zelima/big-mac-index/master/data/big-mac-index.csv");
        const data = (await response).data;
        return data;
    } catch (error) {
        return BIGMAC_ERROR;
    }
}

const parseBigMacCsvToObject = async csv => {
    const rawArray = csv.split(EOL).slice(1);
    const countryDataObject = {};
    rawArray.forEach(el => {
       const temp = el.split(",");
       // overwrite existing records so that we are using the most recent data for each country
        if (temp[0]) {
            countryDataObject[temp[0]] = {
                Country: temp[0],
                LocalPrice: temp[2],
                DollarPrice: temp[4],
                DollarPPP: temp[5]
            }; 
        }
    });

    return countryDataObject;
}

export {getBigMacData, parseBigMacCsvToObject};