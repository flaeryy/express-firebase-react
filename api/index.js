const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.json("Hello you 123");
});

app.listen(port, () => {
  console.log(`Server radi na portu: ${port}`);
});

module.exports = app;