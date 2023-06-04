const express = require("express");

const userRouter = require("./Routes/users/userRoute");
const loginRouter = require("./Routes/users/loginRoute");
const notesRouter = require("./Routes/Notes/notesRoute");
const loginData = require("./Routes/users/loginData");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/login", loginRouter);
app.use("/api/v1/loginData", loginData);
app.use("/api/v1/notes", notesRouter);

module.exports = app;
