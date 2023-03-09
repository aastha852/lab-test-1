import React, { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import Navbar from "./Navbar";

function Hero() {
  const [notesList, setNotesList] = useState([]);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const addNote = (note) => {
    setNotesList([...notesList, note]);
  };

  const selectNote = (id) => {
    setSelectedNoteId(id);
  };
  return (
    <div className="app">
      <HeaderComponent
        notes={notesList}
        addNote={addNote}
        selectNote={selectNote}
      />
    </div>
  );
}

export default Hero;
