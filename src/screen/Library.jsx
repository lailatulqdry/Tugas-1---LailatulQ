import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity, } from 'react-native'
import Tombol from '../component/Tombol';

export default class Beranda extends Component {
    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.judul}>
                    <Text style={{color: 'skyblue', fontStyle: 'normal', fontWeight: 'bold'}}>Library</Text>
                    Buku</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    judul: {
        color: 'dimgray',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'center',
        marginTop: 5,
        backgroundColor: 'mintcream',
        elevation: 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        marginBottom: 10,
    },
})