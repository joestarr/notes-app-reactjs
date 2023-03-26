import React from "react";
import '../styles/styleButton.css'

function NotesButton({id, type, position, handler}) {
    let buttonLabel = '';

    if ((type === 'active' || type === 'archive') && position === 'left') {
        buttonLabel = 'delete';
    } else if (type === 'active' && position === 'right') {
        buttonLabel = 'archive';
    } else if ( type === 'archive' && position === 'right') {
        buttonLabel = 'return';
    }

    return (
        <button className={buttonLabel} onClick={() => handler(id, type)}>{buttonLabel}</button>
    )
}

export default NotesButton;