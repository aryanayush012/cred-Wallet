const express = require("express");
const Note = require("../models/Note");
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// ROUTE 1: fetch all notes data: GET "/api/auth/fetchallnotes".  login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 2: add anew note: POST "/api/auth/addnote".  login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "enter atleast 5 character description").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const { title, description, tag } = req.body;
    try {
      // If there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: update an existing note: PUT "/api/auth/updatenote".  login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    //create a new note object
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

    //validate
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(401).send("Not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Action not allowed");
    }

    //find the note to be updated and update it
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE 4: delete an existing note: DELETE "/api/auth/deletenote".  login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //validate
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(401).send("Not found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Action not allowed");
    }

    //find the note to be deletion and delete it
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "note has been deleted", note: note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
