import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import CustomButton from '../components/customButton';
import { StatusBar } from 'expo-status-bar';
import { NoteContext } from '../context/NoteContext';

function NoteCard({ item }) {
  const { setCurrentPage, deleteNote, setEditNote } = useContext(NoteContext);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.buttons}>
        <CustomButton
          backgroundColor="#FFC300"
          color="#151D3B"
          text="Ubah"
          fontSize={14}
          width={90}
          onPress={() => {
            setEditNote(item);
            setCurrentPage('editNote');
          }}
        />
        <CustomButton
          backgroundColor="#D82148"
          color="#fff"
          text="Hapus"
          fontSize={14}
          width={90}
          onPress={() => deleteNote(item.id)}
        />
      </View>
    </View>
  );
}

function Home() {
  const { noteList, setCurrentPage } = useContext(NoteContext);

  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor='#247881' />
      <CustomButton
        backgroundColor="#247881"
        color="#fff"
        text="Tambahkan Catatan"
        width="100%"
        onPress={() => setCurrentPage('addNote')}
      />
      <FlatList
        data={noteList}
        renderItem={({ item }) => <NoteCard item={item} />}
        keyExtractor={item => item.id.toString()}
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
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    gap: 15,
  },
});

export default Home;
