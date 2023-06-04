const express = require("express");
const notesController = require("./../../controller/notesController");
const loginData = require("./../../middleware/loginData");
const router = express.Router();
const Notes = require("./../../models/Notes");

router.post("/", loginData, notesController.createNote);
router.get("/fetchallnotes", loginData, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.status(200).json(notes);
  } catch (err) {
    console.log("error", err);
  }
});

router
  .route("/:id")
  .put(loginData, notesController.updateNote)
  .delete(loginData, notesController.deleteNote);
module.exports = router;
