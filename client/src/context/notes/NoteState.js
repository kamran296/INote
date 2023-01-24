import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63cfa6c26dd40a59d32efa9d",
      user: "63c97080ba2d7fd133aae050",
      title: "Note",
      description: "Desc ",
      tag: "tag",
      date: "2023-01-24T09:37:06.752Z",
      __v: 0,
    },
    {
      _id: "63cfa6d06dd40a59d32efaa1",
      user: "63c97080ba2d7fd133aae050",
      title: "Note2",
      description: "Desc ",
      tag: "tag",
      date: "2023-01-24T09:37:20.190Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
