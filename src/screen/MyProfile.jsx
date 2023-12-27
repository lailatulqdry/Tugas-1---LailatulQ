import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class MyProfile extends Component {
  render() {
    return (
      <View>
        <Text style={{
          marginTop: 30,
          marginLeft: 15,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 15,
        }}
        >Username : </Text>
        <Text style={{
          marginTop: 20,
          marginLeft: 15,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 15,
        }}
        >Jenis Kelamin : </Text>
        <Text style={{
          marginTop: 20,
          marginLeft: 15,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 15,
        }}
        >E-mail : </Text>
        <Text style={{
          marginTop: 20,
          marginLeft: 15,
          color: 'black',
          fontWeight: 'bold',
          fontSize: 15,
        }}
        >No.HP : </Text>
      </View>
    )
  }
}