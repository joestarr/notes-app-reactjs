import React from "react";
import NotesButton from "./NotesButton";
import '../styles/styleCard.css'

function NotesBody ({id, title, body, type, firstButtonHandler, secondButtonHandler}) {

    let leftButton = <NotesButton id={id} type={type} position='left' handler={firstButtonHandler}/>;
    let rightButton = <NotesButton id={id} type={type} position='right' handler={secondButtonHandler}/>;

    let colors = ['#c5ad50', '#bbd6b8', '#ca2f2f', '#36ae36', '#4c4cbe', '#41b28d', '#7478d1'];
    let random_color = colors[Math.floor(Math.random() * colors.length)];

    return (
       <div className='note-body' style={{backgroundColor: random_color}}>

           <div className='note-title-container' style={{backgroundColor: random_color}}>
               <span className='dot'></span>
               <h2 className='note-title' style={{backgroundColor: random_color}}>{title}</h2>
           </div>
           <p className='note-content' style={{backgroundColor: random_color}}>{body}</p>
           <div className='button-flex' style={{backgroundColor: random_color}}>
               {leftButton}
               {rightButton}
           </div>
       </div>
    )
}

export default NotesBody;