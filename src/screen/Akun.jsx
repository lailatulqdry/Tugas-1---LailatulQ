import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native'
import Tombol from '../component/Tombol';

export default class Akun extends Component {
    render() {
        return (
            <View>
                <Text style={styles.judul}>
                    <Text style={{color: 'skyblue', fontStyle: 'normal', fontWeight: 'bold'}}>Hello!</Text>
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
        color: 'dimgray',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'left',
        marginTop: 5,
        backgroundColor: 'mintcream',
        elevation: 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        marginBottom: 10,
    },
})