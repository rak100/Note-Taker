const Router = require("express").Router();
const { readAndAppend } = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

// GET Route for retrieving all the existing data in database
Router.get("/api/notes", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
Router.post("/api/notes", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in adding new note");
  }
});

module.exports = Router;

