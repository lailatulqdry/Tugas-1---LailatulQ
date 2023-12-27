import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { Component, useEffect, useState } from 'react'

const App = () => {
  const [Username, setUsername] = useState("");
  const [JK, setJK] = useState("");
  const [Email, setEmail] = useState("");
  const [noHP, setnoHP] = useState("");

  const handleSave = () => {
    const params = {
      Username,
      JK,
      Email,
      noHP,
    }

    console.log("Params : ", params);
  }

  return (
    <View>
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('/Users/Diyah/belajarkuy/Tugas/src/images/profil.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100 / 2,
              borderWidth: 3,
              borderColor: 'lightgray',
              marginTop: 40,
            }} />
          <Text style={{
            color: 'black',
            fontWeight: 'bold',
            marginTop: 10,
          }}>Lailatul Qodriyah
          </Text>
        </View>
        <View>
          <Text style={{
            marginLeft: 15,
            marginTop: 20,
            color: 'black',
            fontWeight: 'bold',
          }}>Username :
          </Text>
          <TextInput value={Username} style={styles.input}
            placeholder='Masukkan Username Baru'
            onChangeText={(value) => setUsername(value)} />
          <Text style={{
            marginLeft: 15,
            marginTop: 10,
            color: 'black',
            fontWeight: 'bold',
          }}>Jenis Kelamin P/L :
          </Text>
          <TextInput value={JK} style={styles.input}
            placeholder='Masukkan Jenis Kelamin Anda'
            onChangeText={(value) => setJK(value)} />
          <Text style={{
            marginLeft: 15,
            marginTop: 10,
            color: 'black',
            fontWeight: 'bold',
          }}>E-mail :
          </Text>
          <TextInput value={Email} style={styles.input}
            placeholder='Masukkan Email Baru'
            onChangeText={(value) => setEmail(value)}
            inputMode='email' />
          <Text style={{
            marginLeft: 15,
            marginTop: 10,
            color: 'black',
            fontWeight: 'bold',
          }}>No.HP :
          </Text>
          <TextInput value={noHP} style={styles.input}
            placeholder='Masukkan Password'
            onChangeText={(value) => setnoHP(value)}
            inputMode='numeric' />
          <TouchableOpacity onPress={() => handleSave()}>
            <Text style={{
              marginLeft: 18,
              marginRight: 18,
              marginTop: 20,
              marginBottom: 30,
              color: 'white',
              fontWeight: 'bold',
              backgroundColor: 'dodgerblue',
              paddingVertical: 10,
              textAlign: 'center'
            }}>Save
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  )
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 15,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    height: 40,
    borderRadius: 3,
  }
})

export default App;