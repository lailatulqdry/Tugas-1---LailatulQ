import { Image, Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class Cerita extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Library')}>
                <Image
                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/back.png')}
                    style={{
                        width: 20,
                        height: 20,
                        margin: 20,
                    }}
                />
                </TouchableOpacity>
                <View style={{ marginTop: 5, marginLeft: 20 }}>
                    <Image
                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/1.jpg')}
                        style={{
                            width: 170,
                            height: 250,
                            borderRadius: 10,
                        }} />
                </View>
            </View>
        )
    }
}