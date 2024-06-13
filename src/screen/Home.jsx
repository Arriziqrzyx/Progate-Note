import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import CustomButton from '../components/customButton'
import { StatusBar } from 'expo-status-bar'

function NoteCard({item, setCurrentPage}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.desc}</Text>
      <View style={styles.buttons}>
        <CustomButton
          backgroundColor="#FFC300"
          color="#151D3B"
          text="Ubah"
          fontSize={12}
          width={100}
          onPress={() => setCurrentPage('editNote')}
        />
        <CustomButton
          backgroundColor="#D82148"
          color="#fff"
          text="Hapus"
          fontSize={12}
          width={100}
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

function Home({noteList, setCurrentPage}) {
  return (
    <View style={styles.container}>
      <StatusBar translucent={false} backgroundColor='transparent' />
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Tambahkan Note"
        width="100%"
        onPress={() => setCurrentPage('addNote')}
      />
      <FlatList 
        data={noteList} 
        renderItem={({item}) => <NoteCard item={item} setCurrentPage={setCurrentPage} />} 
        keyExtractor={({id}) => id} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
    marginTop: 10,
  },
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#203239',
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})

export default Home