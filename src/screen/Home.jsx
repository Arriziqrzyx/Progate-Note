import React, { useState, useContext } from 'react';
import { View, StyleSheet, FlatList, Text, Modal, TouchableOpacity } from 'react-native';
import CustomButton from '../components/customButton';
import { StatusBar } from 'expo-status-bar';
import { NoteContext } from '../context/NoteContext';

function NoteCard({ item, onDelete }) {
  const { setCurrentPage, setEditNote } = useContext(NoteContext);

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
          onPress={() => onDelete(item.id)}
        />
      </View>
    </View>
  );
}

function Home() {
  const { noteList, setCurrentPage, deleteNote } = useContext(NoteContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const handleDelete = (id) => {
    setSelectedNoteId(id);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    deleteNote(selectedNoteId);
    setModalVisible(false);
  };

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
        renderItem={({ item }) => <NoteCard item={item} onDelete={handleDelete} />}
        keyExtractor={item => item.id.toString()}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Yakin menghapus Note ini?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#D82148' }]} onPress={confirmDelete}> 
                <Text style={styles.modalButtonText}>Hapus</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#A9A9A9' }]} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Tidak</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#247881',
    borderRadius: 5,
    width: 85,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;
