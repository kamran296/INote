import React, { useState } from "react";
import { useContext } from "react";
import noteContext from "../context/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  // const [note ,SetNote] = useState({title:"", description:"", tag:""});

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="mb-3">
        <h2>Add Notes</h2>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={note.title}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          onChange={onChange}
          value={note.description}
          rows="3"
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Tag
        </label>
        <textarea
          className="form-control"
          id="tag"
          name="tag"
          onChange={onChange}
          value={note.tag}
          rows="3"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={note.title.length < 5 || note.description.length < 5}
        className="btn btn-primary"
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
};

export default AddNote;
