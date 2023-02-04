import React, { useContext } from "react";
import noteContext from "./../context/noteContext";
import NoteState from "../context/NoteState";
import NoteItem from "./NoteItem";

const Notes = (props) => {
  const context = useContext(NoteState);
  // console.log(context);
  const { notes, setNotes } = props;
  return (
    <div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        Hello
        {/* {context.map((note) => {
          return note.title;
        })} */}
        <NoteItem />
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
