import logo from "./logo.svg";
import "./App.css";
import Header from "./componenets/Header";
import Footer from "./componenets/Footer";
import Note from "./componenets/Note";
import notes from "./notes";

// function createNotes(notes) {
//   return <Note key={notes.key} title={notes.title} content={notes.content} />;
// }

function App() {
  return (
    <div>
      <Header />
      {notes.map((notes) => (
        <Note key={notes.key} title={notes.title} content={notes.content} />
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
