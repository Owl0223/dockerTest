const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;
const cors = require("cors");

// Middleware
app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const connectToMongo = async () => {
  try {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB...");
  } catch (error) {
    console.log("Error connecting to DB...\n" + error);
  }
};

connectToMongo();
// Routes
app.use(require("./route"));

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
