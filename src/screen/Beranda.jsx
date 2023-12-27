import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
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
            <View>
                <ScrollView>
                    <View style={styles.beranda}>
                        <View>
                            <Text style={{
                                color: 'skyblue',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                marginLeft: 10,
                                marginTop: 10,
                                fontSize: 20,
                            }}>
                                {this.state.beranda}
                                <Text style={{
                                    color: 'white',
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                    marginLeft: 10,
                                    marginTop: 10,
                                    fontSize: 25,
                                }}>eBOOKS
                                </Text>
                            </Text>
                            <Input placeholder={'Apa yang ingin kamu baca?'} typeKeyboard={'email'} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{
                                marginLeft: 20,
                                marginTop: 15,
                                fontSize: 20,
                                fontWeight: '400',
                                color: 'white',
                            }}>
                                Baru Terbit
                            </Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
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
                        <View style={{
                            backgroundColor: 'white',
                            margin: 15,
                            borderRadius: 7,
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                marginTop: 10,
                                marginLeft: 15,
                                marginBottom: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}>DAMIAN</Text>
                            <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/regantara.jpg')}
                                    style={{
                                        width: 140,
                                        height: 140,
                                        flexDirection: 'row',
                                        marginRight: 10,
                                        marginTop: 10,
                                        marginBottom: 10,
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            marginLeft: 10,
                            marginTop: 20,
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: 'black',
                        }}>
                            Trending
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('/Users/Diyah/belajarkuy/Tugas/src/images/regantara.jpg')}
                            style={{
                                width: 80,
                                height: 130,
                                marginTop: 15,
                                marginLeft: 10,
                            }}
                        />
                        <TouchableOpacity>
                            <Text style={{
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 25,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>Regantara
                            </Text>
                            <Text style={{
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 20,
                                color: 'gray',
                            }}>SMA | Trending #1
                            </Text>
                            <Text style={{
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 5,
                                marginBottom: 15,
                                color: 'gray',
                            }}>cuplikan cerita
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('/Users/Diyah/belajarkuy/Tugas/src/images/putri.jpg')}
                            style={{
                                width: 80,
                                height: 130,
                                marginTop: 15,
                                marginLeft: 10,
                            }}
                        />
                        <TouchableOpacity>
                            <Text style={{
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 25,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>Menjadi Putri Kerajaan
                            </Text>
                            <Text style={{
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 20,
                                color: 'gray',
                            }}>Kerajaan | Trending #2
                            </Text>
                            <Text style={{
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 5,
                                marginBottom: 15,
                                color: 'gray',
                            }}>Cuplikan 
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={require('/Users/Diyah/belajarkuy/Tugas/src/images/dongeng.jpg')}
                            style={{
                                width: 80,
                                height: 130,
                                marginTop: 15,
                                marginLeft: 10,
                            }}
                        />
                        <TouchableOpacity>
                            <Text style={{
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 25,
                                color: 'black',
                                fontWeight: 'bold'
                            }}>Dongeng Sang Kancil
                            </Text>
                            <Text style={{
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 20,
                                color: 'gray',
                            }}>Cerdik | Trending #3
                            </Text>
                            <Text style={{
                                marginLeft: 20,
                                marginRight: 10,
                                marginTop: 5,
                                marginBottom: 15,
                                color: 'gray',
                            }}>Cuplikan
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
})

