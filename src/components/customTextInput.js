import React from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'

function CustomTextInput({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) {
  return (
    <View style={styles.textInputWrapper}>
      <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInputWrapper: {
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#DDD',
    padding: 10,
  },
})

export default CustomTextInput