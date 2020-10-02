import express from "express";
import path from "path";
import logger from "morgan";

import getLocationData from "./location";
import {
    getBigMacData,
    parseBigMacCsvToObject
} from "./bigmac";

const app = express();
const port = 5000;

// this will contain the big mac data object once we get that from github
let bigMacData;
let usBigMacData;
let country = "United States"; // TODO: set this when we get the country data

app.use("/static", express.static(__dirname + "/public"));
app.use(logger("dev"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/country", async (req, res) => {
    // getLocationData()
    //     .then(country => {
    //         res.send(country);
    //     });
    res.send("United States");
});

app.get("/bigmacs", async (req, res) => {
    const keys = Object.keys(bigMacData);
    const randomCountry = keys[Math.floor(Math.random() * keys.length)];
    res.send({
        "CurrentCountry" : usBigMacData,
        "RandomCountry" : bigMacData[randomCountry]
    });
});

app.listen(port, () => {
    getBigMacData()
        .then(async data => {
            bigMacData = await parseBigMacCsvToObject(data);
            // storing country data and then removing it simplifies getting random country data
            // TODO: make this work for other countries
            usBigMacData = bigMacData["United States"];
            delete bigMacData["United States"];
        });
    console.log(`Example app listening at http://localhost:${port}`);
});