import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity, } from 'react-native'
import Input from '../component/Input';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Beranda extends Component {
    render() {
        return (
            <View style={{marginTop: 10}}>
                <Input placeholder={'Ketik disini'} typeKeyboard={'email'}/>
            </View>
        )
    };
}