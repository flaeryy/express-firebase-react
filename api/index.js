const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const url =
  "mongodb+srv://flaery:flaery@cluster0.okuvhrd.mongodb.net/mern-vercel?retryWrites=true&w=majority";

const connectDatabase = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB database successfully.");

    // Dohvati sve kolekcije u bazi podataka
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();

    console.log("Collections in the database:");
    collections.forEach((collection) => {
      console.log(collection.name);
    });

    mongoose.connection.close();
  } catch (error) {
    console.log("Database connection error: ", error.message);
  }
};
app.get("/api/getcollections", async (req, res) => {
  try {
    await connectDatabase();

    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();

    console.log("Collections in the database:");
    collections.forEach((collection) => {
      console.log(collection.name);
    });

    res.json(collections);
  } catch (error) {
    console.error("Error retrieving collections:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(cors());
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.json("Hello you 123");
});

const buildDir = path.resolve(__dirname, "..", "frontend", "build");
const indexDir = path.join(buildDir, "index.html");

// Build directory
app.use(express.static(buildDir));

// Serve index.html for all other routes
app.get("*", function (req, res) {
  res.status(200).sendFile(indexDir);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;
