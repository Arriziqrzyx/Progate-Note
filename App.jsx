import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { NoteProvider, NoteContext } from './src/context/NoteContext';
import Home from './src/screen/Home';
import AddNote from './src/screen/addNote';
import EditNote from './src/screen/editNote';

function CurrentPageWidget() {
  const { currentPage, setCurrentPage, noteList, addNote, deleteNote, editNote, setEditNote, updateNote } = useContext(NoteContext);

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
  return (
    <NoteProvider>
      <View style={styles.container}>
        <CurrentPageWidget />
      </View>
    </NoteProvider>
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
