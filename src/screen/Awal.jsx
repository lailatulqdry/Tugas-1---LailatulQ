import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'


export default class Awal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('/Users/Diyah/belajarkuy/Tugas/src/images/awal.png')} resizeMode="contain" style={styles.image}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Beranda')}>
                        <Image
                            source={require('/Users/Diyah/belajarkuy/Tugas/src/images/next.png')}
                            style={{
                                width: 50,
                                height: 50,
                                marginTop: 300,
                                marginLeft: 135,
                            }} />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
});
