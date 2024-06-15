import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function CustomButton({
  backgroundColor,
  color,
  text,
  onPress,
  fontSize = 16,
  width = 120,
  ...otherProps
}) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor, width }]} onPress={onPress} {...otherProps}>
      <Text style={[styles.buttonText, { color, fontSize }]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default CustomButton;
