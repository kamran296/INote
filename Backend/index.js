const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const db = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(db, {
    useNewUrlParser: true,
  })
  .then((con) => {
    console.log("Database connected successfully!!");
  })
  .catch((err) => {
    console.log("error connecting database", err);
  });

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
