const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.json("Hello you 123");
});

app.listen(port, () => {
  console.log(`Server radi na portu: ${port}`);
});
