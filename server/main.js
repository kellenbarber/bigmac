const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

app.use("/static", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`);
});