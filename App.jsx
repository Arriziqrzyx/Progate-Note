import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/customButton';
import CustomTextInput from './src/components/customTextInput';
import { useState } from 'react';
import Home from './src/screen/Home';
import AddNote from './src/screen/addNote';
import EditNote from './src/screen/editNote';
import addNote from './src/screen/addNote';

const DUMMY_DATA = [
  {
    id: 1,
    title: 'Note pertama',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    id: 2,
    title: 'Note kedua',
    desc:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  }
]

function CurrentPageWidget ({currentPage, setCurrentPage, noteList, addNote}) {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />
    case 'addNote':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'editNote':
      return <EditNote />
  
    default:
      return <Home />
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [noteList, setNoteList] = useState(DUMMY_DATA)

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id: id,
        title: title,
        desc: desc,
      }
    ])
  };

  return (
    <CurrentPageWidget
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    noteList={noteList}
    addNote={addNote}
    />
  )
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
