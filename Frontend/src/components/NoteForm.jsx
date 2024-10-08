import { Button, Input, Textarea } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

const NoteForm = ({ currentNote, onAddNote, onEditNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '') return alert('Title cannot be empty');

    if (currentNote) {
      onEditNote(currentNote._id, { title, content });
    } else {
      onAddNote({ title, content });
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <Textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <Button type="submit">{currentNote ? 'Update' : 'Add'} Note</Button>
    </form>
  );
};

export default NoteForm;