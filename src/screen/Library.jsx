import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity, } from 'react-native'
import Tombol from '../component/Tombol';

export default class Beranda extends Component {
    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.judul}>
                    <Text style={{color: 'green', fontStyle: 'normal', fontWeight: 'bold'}}>Library</Text>
                    Buku</Text>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Beranda')}>
                    <Text>Ke Beranda</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Akun')}>
                    <Text>Ke Akun</Text>
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
        textAlign: 'center',
        marginTop: 5,
    },
    box: {
        backgroundColor: 'white',
        padding: 10,
    }
})