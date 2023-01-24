import React, { useContext } from "react";
import NoteContext from "./../context/notes/noteContext";

const Notes = () => {
  const context = useContext(NoteContext);
  console.log(NoteContext);
  const { notes, setNotes } = NoteContext;
  console.log(notes);
  return (
    <div>
      <div className="conatiner my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return note.title;
        })}
      </div>
      ;
    </div>
  );
};

export default Notes;
