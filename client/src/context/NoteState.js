import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // GET ALL NOTES
  const getNotes = async (req, res) => {
    // API Call
    const response = await fetch(`${host}/api/v1/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNotes(json);
  };
  // ADD NOTES
  const addNote = async (title, description, tag) => {
    //  API CALL
    const response = await fetch(`${host}/api/v1/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();

    // LOGIC

    console.log(note);
    setNotes(notes.concat(note));
  };

  // DELETE NOTES
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/v1/Notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      return response.json();
    });

    // console.log("Deleting Node", id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // EDIT NOTES
  const editNote = async (id, title, description, tag) => {
    console.log(id);
    // API CALL
    const response = await fetch(`${host}/api/v1/Notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    // LOGIC FOR FUNCTION
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // console.log(notes, "234567890");
  // console.log(getNotes(), 234);
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
