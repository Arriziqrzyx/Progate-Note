import React from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

function CustomTextInput({
  text,
  onChange,
  label,
  multiline,
  numberOfLines,
}) {
  return (
    <View style={styles.textInputWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={label}
        onChangeText={onChange}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputWrapper: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
  },
});

export default CustomTextInput;
