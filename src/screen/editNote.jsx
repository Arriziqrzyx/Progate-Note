import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomTextInput from '../components/customTextInput';
import CustomButton from '../components/customButton';
import { StatusBar } from 'expo-status-bar';

function editNote({ setCurrentPage, editNote, updateNote }) {
  const [title, setTitle] = useState(editNote?.title || '');
  const [desc, setDesc] = useState(editNote?.desc || '');

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setDesc(editNote.desc);
    }
  }, [editNote]);

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor='transparent' />
      <Text style={styles.pageTitle}>Ubah Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton 
          backgroundColor="#247881"
          color="#fff"
          text="Simpan"
          width="100%"
          onPress={() => {
            updateNote(editNote.id, title, desc);
            setCurrentPage('home');
          }}
          disabled={title === ''}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default editNote;