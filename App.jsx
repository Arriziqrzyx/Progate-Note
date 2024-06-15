import { StyleSheet } from 'react-native';
import { useState } from 'react';
import Home from './src/screen/Home';
import AddNote from './src/screen/addNote';
import EditNote from './src/screen/editNote';

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

function CurrentPageWidget({ currentPage, setCurrentPage, noteList, addNote, deleteNote, editNote, setEditNote, updateNote }) {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setEditNote={setEditNote} />;
    case 'addNote':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'editNote':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} updateNote={updateNote} />;
    default:
      return <Home />;
  }
}

export default function App() {
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
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      setEditNote={setEditNote}
      updateNote={updateNote}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 40,
  },
});
