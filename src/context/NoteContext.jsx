import React, { createContext, useState } from 'react';

const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const DUMMY_DATA = [
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      id: 2,
      title: 'Note kedua',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    }
  ];

  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState(DUMMY_DATA);
  const [editNote, setEditNote] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id: id,
        title: title,
        desc: desc,
      }
    ]);
  };

  const deleteNote = (id) => {
    const deletedNote = noteList.filter(note => note.id !== id);
    setNoteList(deletedNote);
  };

  const updateNote = (id, title, desc) => {
    setNoteList(noteList.map(note => 
      note.id === id ? { ...note, title, desc } : note
    ));
  };

  return (
    <NoteContext.Provider value={{
      currentPage,
      setCurrentPage,
      noteList,
      addNote,
      deleteNote,
      editNote,
      setEditNote,
      updateNote,
    }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteProvider };
