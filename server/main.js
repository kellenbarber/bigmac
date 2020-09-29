const express = require("express");
const path = require("path");
const cors = require("cors");
const logger = require("morgan");

const app = express();
const port = 5000;

const corsOptions = {
    origin: "localhost:5000"
};

app.use("/static", express.static(__dirname + "/public"));
app.use(logger("dev"));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/test", (req, res) => {
    res.send("test test test");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
});