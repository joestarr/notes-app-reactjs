import React from "react";
import NotesBody from "./NotesBody";
import '../styles/styleList.css'

function NotesList({notes, type, firstHandler, secondHandler}) {
    return (
        <div className='notes-list'>
            {
                notes.map((note) => (
                    <NotesBody id={note.id} title={note.title} body={note.body} type={type} firstButtonHandler={firstHandler} secondButtonHandler={secondHandler}/>
                ))
            }
        </div>
    )
}

export default NotesList;