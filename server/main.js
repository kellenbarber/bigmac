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

let bigMacData;

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

app.listen(port, () => {
    getBigMacData()
        .then(data => {
            bigMacData = parseBigMacCsvToObject(data);
        });
    console.log(`Example app listening at http://localhost:${port}`);
});