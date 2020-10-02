// main.js

import express from "express";
import path from "path";
import logger from "morgan";

import getLocationData from "./locationClient";
import {
    getBigMacData,
    parseBigMacCsvToObject
} from "./bigmacClient";

const app = express();
const port = 5000;

// this will contain the big mac data object once we get that from github
let bigMacData;
let localBigMacData;
let country;

app.use("/static", express.static(__dirname + "/public"));
app.use(logger("dev"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/country", async (req, res) => {
    getLocationData()
        .then(response => {
            country = response;
            res.send(country);
        });
});

app.get("/bigmacs", async (req, res) => {
    const keys = Object.keys(bigMacData);
    const randomCountry = keys[Math.floor(Math.random() * keys.length)];
    // storing country data and then removing it simplifies getting random country data
    if (localBigMacData === undefined) {
        localBigMacData = bigMacData[country];
        delete bigMacData[country];
    }
    res.send({
        "CurrentCountry" : localBigMacData,
        "RandomCountry" : bigMacData[randomCountry]
    });
});

app.listen(port, () => {
    getBigMacData()
        .then(async data => {
            bigMacData = await parseBigMacCsvToObject(data);
        });
    console.log(`Example app listening at http://localhost:${port}`);
});