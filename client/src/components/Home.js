import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

const Home = () => {
  // const noteContext = createContext();
  // const NoteProvider = noteContext.Provider;
  return (
    <div className="row my-3">
      <Notes />
    </div>
  );
};

export default Home;
