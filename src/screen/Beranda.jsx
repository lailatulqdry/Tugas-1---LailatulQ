import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import Input from '../component/Input';

export default class Beranda extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beranda: ''
        };
    }

    render() {
      return (
            <View style={styles.beranda}>
                <View> 
                    <Text style={{color: 'skyblue', 
                        fontStyle: 'normal', 
                        fontWeight: 'bold', 
                        marginLeft: 10,
                        marginTop: 10,
                        fontSize:20,
                        }}>
                    {this.state.beranda}
                    <Text style={{color: 'white', 
                        fontStyle: 'normal', 
                        fontWeight: 'bold', 
                        marginLeft: 10,
                        marginTop: 10,
                        fontSize:25,
                        }}>eBOOKS
                    </Text>
                    </Text>
                    <Input placeholder={'Apa yang ingin kamu baca?'} typeKeyboard={'email'}/>
                </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{
                            marginLeft: 20,
                            marginTop: 15,
                            fontSize: 20,
                            fontWeight: '400',
                            color: 'white',
                            }}>
                            Baru Terbit
                        </Text>
                        <View style={{alignItems: 'flex-end', flex: 1}}>
                        <TouchableOpacity>
                            <Image
                                source={require('/Users/Diyah/belajarkuy/Tugas/src/images/more.png')}
                                style={{
                                    width: 20, 
                                    height: 20,
                                    marginTop: 15,
                                    marginRight: 20,
                                }}
                            />
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                    <Image
                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/profil.jpg')}
                        style={{
                            width: 290, 
                            height: 170,
                            margin: 15,
                        }}
                        />
                    </View>
            </View>
      );
    };
};

const styles = StyleSheet.create({
    judul: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 10,
        elevation: 20,
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 5,
        marginBottom: 10,
    },
    beranda: {
        backgroundColor: 'dodgerblue',
    },
})

