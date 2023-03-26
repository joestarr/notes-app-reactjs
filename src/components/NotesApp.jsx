import React from "react";
import NotesInput from "./NotesInput";
import { getNotesData } from "../utils/data";
import NotesDisplay from "./NotesDisplay";
import SearchInput from "./SearchInput";
import '../styles/styleApp.css'

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: getNotesData().active,
      dummyActiveNotes: getNotesData().active,
      archiveNotes: getNotesData().archive,
      dummyArchiveNotes: getNotesData().archive,
    };

    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
    this.returnNoteHandler = this.returnNoteHandler.bind(this);
    this.searchNoteHandler = this.searchNoteHandler.bind(this);
  }

  addNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        activeNotes: [
          ...prevState.activeNotes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
        dummyActiveNotes: [
          ...prevState.activeNotes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  }

  searchNoteHandler(text) {
    if (text.length !== 0 && text.trim() !== "") {
      this.setState({
        dummyActiveNotes: this.state.activeNotes.filter((note) =>
          note.title.toLowerCase().includes(text.toLowerCase())
        ),
        dummyArchiveNotes: this.state.archiveNotes.filter((note) =>
          note.title.toLowerCase().includes(text.toLowerCase())
        ),
      });
    } else {
      this.setState({
        dummyActiveNotes: this.state.activeNotes,
        dummyArchiveNotes: this.state.archiveNotes,
      });
    }
  }

  deleteNoteHandler(id, type) {
    if (type === "active") {
      this.setState({
        activeNotes: this.state.activeNotes.filter((note) => note.id !== id),
        dummyActiveNotes: this.state.activeNotes.filter(
          (note) => note.id !== id
        ),
      });
    } else {
      this.setState({
        archiveNotes: this.state.archiveNotes.filter((note) => note.id !== id),
        dummyArchiveNotes: this.state.archiveNotes.filter(
            (note) => note.id !== id
        ),
      });
    }
  }

  archiveNoteHandler(id) {
    this.setState((prevState) => {
      let movedNote = this.state.activeNotes.filter(
        (note) => note.id === id
      )[0];

      return {
        archiveNotes: [
          ...prevState.archiveNotes,
          {
            id: movedNote.id,
            title: movedNote.title,
            body: movedNote.body,
            archived: true,
            createdAt: movedNote.createdAt,
          },
        ],
        dummyArchiveNotes: [
            ...prevState.dummyArchiveNotes,
          {
            id: movedNote.id,
            title: movedNote.title,
            body: movedNote.body,
            archived: true,
            createdAt: movedNote.createdAt,
          }
        ]
      };
    });

    this.deleteNoteHandler(id, "active");
    if (this.state.activeNotes.length === 1) {
      this.setState({
        emptyActive: true,
      });
    }
    this.setState({
      emptyArchive: false,
    });
  }

  returnNoteHandler(id) {
    this.setState((prevState) => {
      let movedNote = this.state.archiveNotes.filter(
        (note) => note.id === id
      )[0];

      return {
        activeNotes: [
          ...prevState.activeNotes,
          {
            id: movedNote.id,
            title: movedNote.title,
            body: movedNote.body,
            archived: false,
            createdAt: movedNote.createdAt,
          },
        ],
        dummyActiveNotes: [
          ...prevState.dummyActiveNotes,
          {
            id: movedNote.id,
            title: movedNote.title,
            body: movedNote.body,
            archived: false,
            createdAt: movedNote.createdAt,
          },
        ],
      };
    });

    this.deleteNoteHandler(id, "archive");
  }

  render() {
    return (
      <div>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        </style>
        <h1 className='create-title-label'>Buat Catatan</h1>
        <NotesInput addNote={this.addNoteHandler} />
        <SearchInput searchInput={this.searchNoteHandler} />
        <NotesDisplay
          notes={this.state.dummyActiveNotes}
          type="active"
          firstHandler={this.deleteNoteHandler}
          secondHandler={this.archiveNoteHandler}
        />
        <NotesDisplay
          notes={this.state.dummyArchiveNotes}
          type="archive"
          firstHandler={this.deleteNoteHandler}
          secondHandler={this.returnNoteHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
