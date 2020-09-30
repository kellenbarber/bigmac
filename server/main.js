import express from "express";
import path from "path";
import logger from "morgan";

import getLocationData from "./location";

const app = express();
const port = 5000;

app.use("/static", express.static(__dirname + "/public"));
app.use(logger("dev"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/test", async (req, res) => {
    getLocationData("67.183.246.10")
        .then(country => {
            res.send(country);
        });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
});