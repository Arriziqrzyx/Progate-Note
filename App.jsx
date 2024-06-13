import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/customButton';
import CustomTextInput from './src/components/customTextInput';
import { useState } from 'react';
import Home from './src/screen/Home';

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

export default function App() {
  const [noteList, setNoteList] = useState(DUMMY_DATA)

  return <Home noteList={noteList} />
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
