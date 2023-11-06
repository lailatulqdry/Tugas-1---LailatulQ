import React, {Component} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native'

export default class Akun extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.3, backgroundColor: 'darkseagreen'}}></View>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                                source={require('/Users/Diyah/belajarkuy/Tugas/src/images/profil.jpg')}
                            style={{
                                width: 100, 
                                height: 100, 
                                borderRadius: 100 / 2, 
                                borderWidth: 3, 
                                borderColor: 'lightgray',
                                position: 'absolute',}}/>
                    </View>
                    <View style={{marginTop: 50}}>
                        <Text style={{
                            color: 'black',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginTop: 5,
                        }}>Lailatul Qodriyah</Text>
                    </View>
                </View>
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