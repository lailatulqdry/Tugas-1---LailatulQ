import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, } from 'react-native'
import Tombol from '../component/Tombol';

export default class Akun extends Component {
    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.judul}>
                    <Text style={{color: 'green', fontStyle: 'normal', fontWeight: 'bold'}}>Hello!</Text>
                    Diyah</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    judul: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'right',
        marginTop: 5,
    },
    box: {
        backgroundColor: 'black',
        padding: 10,
    }
})