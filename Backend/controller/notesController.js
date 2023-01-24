const Notes = require("./../models/Notes");

module.exports.createNote = async (req, res) => {
  const user = req.user.id;
  console.log("user id is", user);
  const newNote = await Notes.create({
    title: req.body.title,
    description: req.body.description,
    tag: req.body.tag,
    user: req.user.id,
  });
  const savedNotes = await newNote.save();
  console.log(savedNotes);

  try {
    console.log("user id is", user);

    res.status(200).json({
      status: "success",
      data: {
        savedNotes,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};

// Getting all the notes of the user
module.exports.getAllNotes = async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.status(200).json({ note: notes });
};

// Updating notes of the user

module.exports.updateNote = async (req, res) => {
  const { title, description, tag } = req.body;
  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(400).send("error in updating");
    }
    let value = note.user;
    console.log("user value is:", value);
    if (value.toString() !== req.user.id) {
      return res.status(400).send("error in updating");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.status(200).json(note);
  } catch (err) {
    res.status(400).json({
      message: "error",
    });
  }
};

// DELETING A NOTE OF A LOGINED USER

module.exports.deleteNote = async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(400).send("error in deleting");
    }
    let value = note.user;

    if (value.toString() !== req.user.id) {
      return res.status(400).send("error in deleting");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted successfully");
  } catch (error) {
    res.status(400).send("error in deleting");
  }
};
