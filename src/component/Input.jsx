import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

const Input = ({placeholder, multiline, typeKeyboard}) => {
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
        borderColor: 'gray',
        marginTop: 7,
        marginLeft: 7,
        marginRight: 7,
    }
})