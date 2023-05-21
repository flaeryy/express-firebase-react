const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const basicFetchRouter = require("./routes/basicFetch");
const searchFetchRouter = require("./routes/searchFetch");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.json("Hello you 123");
});

app.use("/api/basicFetch", basicFetchRouter);
app.use("/api/search", searchFetchRouter);

// const buildDir = path.resolve(__dirname, "..", "frontend", "build");
// const indexDir = path.join(buildDir, "index.html");

// Build directory
// app.use(express.static(buildDir));

// Serve index.html for all other routes
/* app.get("*", function (req, res) {
  res.status(200).sendFile(indexDir);
}); */

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
