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
  const [note, setNote] = useState([]);

  function addNote(newNote) {
    setNote((prevNote) => {
      return [...prevNote, newNote];
    });
  }

  function deleteItem(id) {
    setNote((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {note.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
