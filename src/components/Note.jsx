import React from 'react';
import '../styles/Note.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import useDragger from '../hooks/useDragger.ts';

export default function Note({ id, text, left, top, deleteNote }) {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  useDragger(id);

  return (
    <div className = 'noteContainer'
          id= {id}
         style = {{
          top: `${top}px`,
          left: `${left}px`
         }}>
      <AiOutlineCloseCircle
        className='btnClose'
        onClick={ () => deleteNote(id) }
        />
      <p className='dateNote'>
        { date }
      </p>
      <p className='textNote'>
        { text }
      </p>
    </div>
    
  )
}
