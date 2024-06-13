import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/customButton';
import CustomTextInput from './src/components/customTextInput';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton
      backgroundColor="#DDDDDD"
      color="#39494F"
      text="Custom Button"
      width="100%"
      onPress={() => {}}
    />
      <CustomTextInput 
      label="Custom Text"
      multiline
      numberOfLines={2}
      onChange={() => {}}
      />
    </View>
  );
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
