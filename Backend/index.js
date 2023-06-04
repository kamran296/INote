const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// APP.js ////
const userRouter = require("./Routes/users/userRoute");
const loginRouter = require("./Routes/users/loginRoute");
const notesRouter = require("./Routes/Notes/notesRoute");
const loginData = require("./Routes/users/loginData");
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/loginData", loginData);
app.use("/api/v1/notes", notesRouter);

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
app.listen(5000, () => {
  console.log(`App running on port ${port}...`);
});
