import React, {Component} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native'
import Tombol from '../component/Tombol';

export default class Akun extends Component {
    render() {
        return (
            <View>
                <Text style={styles.judul}>
                    <Text style={{color: 'skyblue', fontStyle: 'normal', fontWeight: 'bold'}}>Hello!</Text>
                    Diyah</Text>
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
        textAlign: 'left',
        marginTop: 5,
        elevation: 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        marginBottom: 10,
    },
})