import React, { useContext } from "react";
import noteContext from "./../context/noteContext";
const NoteItem = ({ props }) => {
  const context = React.useContext(noteContext);
  const { notes } = { props };
  return (
    <div className="col-md-3">
      {/* {notes.title} */}

      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props}</h5>
          <p className="card-text">{props}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
