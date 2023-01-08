import React, { useState} from 'react';
import '../styles/NoteForm.css';
import { AiFillFileAdd } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

export default function NoteForm( props ) {

  const [input, setInput] = useState('');
  
  const changeHandler = e => {
    setInput(e.target.value);
  }

  const sendHandler = e => {
    e.preventDefault();

    const newNote = {
        id: uuidv4(),
        text: input
      }
      props.onSubmit(newNote);
  }

  return (
    <div className='formContainer'>
      <h2 className='title'>Notes</h2>
      <form className='form'>
        <textarea 
          className='note'
          name="note" 
          id="note" 
          cols="30" 
          rows="10"
          placeholder='Write a note'
          onChange={ changeHandler }>
        </textarea> 
        <AiFillFileAdd
          className='addBtn'
          onClick={sendHandler}
        />
      </form>
    </div>
  )
}
