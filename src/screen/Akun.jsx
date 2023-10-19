import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native'
import Tombol from '../component/Tombol';

export default class Akun extends Component {
    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.judul}>
                    <Text style={{color: 'green', fontStyle: 'normal', fontWeight: 'bold'}}>Hello!</Text>
                    Diyah</Text>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Beranda')}>
                    <Text>Ke Beranda</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Library')}>
                    <Text>Ke Library</Text>
                </TouchableOpacity>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    judul: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'right',
        marginTop: 5,
    },
    box: {
        backgroundColor: 'white',
        padding: 10,
    }
})