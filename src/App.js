import './App.css';
import NoteForm from './components/NoteForm';
import Note from './components/Note'
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([]);
  const [top, setTop] = useState(224);
  const [left, setLeft] = useState(800);

  function numberTop(){
    let y = top + 27;
    setTop(y);
    return y;
  }

  function numberLeft(){
    let x = left + 10;
    setLeft(x);
    return x;
  }

  const addNote = note => {
    if(note.text.trim()){
      note.text = note.text.trim();
      note.top = numberTop();
      note.left = numberLeft();
      const updateNotes = [...notes, note];
      setNotes(updateNotes);
    }
  }

  return (
    <div className="App">
      <NoteForm onSubmit = {addNote}/>
      {
        notes.map((note) =>
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            top={note.top}
            left={note.left}
          />
        )
      }
    </div>
  );
}

export default App;
