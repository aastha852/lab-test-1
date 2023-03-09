import React from "react";

function HeaderComponent({ notes, addNote, selectNote }) {
  const handleClick = (note) => {
    selectNote(note.id);
  };
  return (
    <div>
      <input className="textInput" type="text" id="note" placeholder="Note" />
      <button
        className="button1"
        onClick={() => {
          var temp = document.getElementById("note").value;
          document.getElementById("note").value = "";
          addNote({ id: Date.now(), title: temp, content: "" });
        }}
      >
        Add Note
      </button>
      <div className="displayList">
        <ul className="listInstance">
          {notes.map((note) => (
            <li key={note.id} onClick={() => handleClick(note)}>
              {note.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderComponent;
