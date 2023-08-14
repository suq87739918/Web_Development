import logo from "./logo.svg";
import "./App.css";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import Note from "./componenets/Note";
import notes from "./notes";
import CreateArea from "./componenets/CreateArea";
import { useState } from "react";

// function createNotes(notes) {
//   return <Note key={notes.key} title={notes.title} content={notes.content} />;
// }

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function addNewNote(newNote) {
    setNotesArray((previousNotes) => {
      return [...previousNotes, newNote];
    });
  }

  function deleteNoteByIndex(noteIndex) {
    setNotesArray((previousNotes) => {
      return previousNotes.filter((currentNote, index) => {
        return index !== noteIndex;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNewNote} />
      {notesArray.map((currentNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={currentNote.title}
            content={currentNote.content}
            onDelete={deleteNoteByIndex}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
