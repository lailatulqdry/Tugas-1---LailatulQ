import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('/Users/Diyah/belajarkuy/Tugas/src/images/profil.jpg')}
          style={{
            width: 100, 
            height: 100, 
            borderRadius: 100 / 2, 
            borderWidth: 3, 
            borderColor: 'lightgray',
            marginTop: 40,
            }}/>
        <Text style={{
          color: 'black',
          fontWeight: 'bold',
          marginTop: 10,
          }}>Lailatul Qodriyah
        </Text>
        <TouchableOpacity>
          <Text style={{
            color: 'gray',
            fontSize: 12,
            }}>Change Profil
          </Text>
        </TouchableOpacity>
        </View>
    )
  }
}