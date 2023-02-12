const express = require("express");
const path = require("path");
const PORT = 4000;

const app = express();
app.listen(PORT);

app.get("*", (req, res) => res.send("test"));

console.log(`server has been started on port ${PORT}`);
