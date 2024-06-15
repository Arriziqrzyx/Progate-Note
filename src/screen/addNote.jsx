import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomTextInput from '../components/customTextInput';
import CustomButton from '../components/customButton';
import { NoteContext } from '../context/NoteContext';
import { StatusBar } from 'expo-status-bar';

function AddNote() {
  const { setCurrentPage, addNote } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor='#247881' />
      <Text style={styles.pageTitle}>Tambahkan Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Masukkan judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Masukkan deskripsi"
        multiline
        numberOfLines={4}
      />
      <CustomButton
        backgroundColor="#247881"
        color="#fff"
        text="Simpan"
        width="100%"
        onPress={() => {
          addNote(title, desc);
          setCurrentPage('home');
        }}
        disabled={title === ''}
      />
      <CustomButton
        backgroundColor="#DDDDDD"
        color="#203239"
        text="Kembali ke Home"
        width="100%"
        onPress={() => setCurrentPage('home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
});

export default AddNote;
