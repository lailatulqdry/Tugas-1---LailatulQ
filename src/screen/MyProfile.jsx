import { Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const App = ({route}) => {

    return (
      <View>
        <Text>Username : {route.params.Username}</Text>
        <Text>Jenis Kelamin : {route.params.JK}</Text>
        <Text>E-mail : {route.params.Email}</Text>
        <Text>no.HP : {route.params.noHP}</Text>
      </View>
    )
};

export default App;