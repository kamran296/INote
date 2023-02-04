import React from "react";
import Notes from "./Notes";
// import { createContext } from "react";

const Home = () => {
  // const noteContext = createContext();
  // const NoteProvider = noteContext.Provider;
  return (
    <div className="row my-3">
      {/* <div class="mb-3">
        <h2>Add Notes</h2>
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div> */}
      {/* <NoteProvider value={{ notes, setNotes }}> */}
      <Notes />
      {/* </NoteProvider> */}
    </div>
  );
};

export default Home;
