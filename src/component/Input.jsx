import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({ placeholder, multiline, typeKeyboard }) => {
  return (
    <View style={styles.boxInput}>
      <TextInput
        placeholder={placeholder}
        multiline={multiline}
        inputMode={typeKeyboard}
      />
    </View>
  );
};

export default Input

const styles = StyleSheet.create({
  boxInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    borderColor: 'white',
    marginTop: 7,
    marginLeft: 12,
    marginRight: 7,
    height: 40,
    width: 300,
  }
})