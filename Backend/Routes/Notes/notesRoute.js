const express = require("express");
const notesController = require("./../../controller/notesController");
const loginData = require("./../../middleware/loginData");
const router = express.Router();

router
  .route("/")
  .get(loginData, notesController.getAllNotes)
  .post(loginData, notesController.createNote);

router
  .route("/:id")
  .put(loginData, notesController.updateNote)
  .delete(loginData, notesController.deleteNote);
module.exports = router;
