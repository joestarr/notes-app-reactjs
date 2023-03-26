import React from "react";
import NotesList from "./NotesList";
import '../styles/styleDisplay.css';

function NotesDisplay({
  notes,
  type,
  firstHandler,
  secondHandler
}) {
  return (
    <div className="notes-display-container">
      <h1 className='notes-label'>{type.toUpperCase()} NOTES</h1>
      {notes.length === 0 ? (
        <h1 className='empty-label'>EMPTY {type.toUpperCase()} NOTES</h1>
      ) : (
        <NotesList
          notes={notes}
          type={type}
          firstHandler={firstHandler}
          secondHandler={secondHandler}
        />
      )}
    </div>
  );
}

export default NotesDisplay;
