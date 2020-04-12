import React, { useState } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import { Button } from '@material-ui/core';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  document.body.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'Enter') {
      event.preventDefault();
      addNewNote();
    }
  });

  const addNewNote = () => {
    const newNote = {
      content: '',
    };
    setNotes([...notes, newNote]);
  };

  return (
    <section>
      <Button color="primary" variant="outlined" onClick={addNewNote}>
        Add note
      </Button>
      {notes.map((note) => (
        <NoteItem note={note} />
      ))}
    </section>
  );
};

export default NoteList;
