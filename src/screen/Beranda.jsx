import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import Input from '../component/Input';

const App = () => {

    const [Baru, setBaru] = useState([
        {
            Judul: 'DAMIAN', Status: 'SMA | Baru',
            Cuplikan: '',
            image: require('/Users/Diyah/belajarkuy/Tugas/src/images/3.jpg')
        },
    ]);

    const [Trending, setTrending] = useState([
        {
            image: require('/Users/Diyah/belajarkuy/Tugas/src/images/9.jpg'),
            judul: 'REGANTARA', Status: 'Novel | Daily Update',
            Cuplikan: '',
        },
        {
            image: require('/Users/Diyah/belajarkuy/Tugas/src/images/1.jpg'),
            judul: 'Kancil & Buaya', Status: 'Cerita Anak | Daily Update',
            Cuplikan: '',
        },
        {
            image: require('/Users/Diyah/belajarkuy/Tugas/src/images/2.jpg'),
            judul: 'Lancar Membaca', Status: 'Pengetahuan | Daily Update',
            Cuplikan: '',
        },
        {
            image: require('/Users/Diyah/belajarkuy/Tugas/src/images/4.png'),
            judul: 'Grizella Antagonis', Status: 'SMA | Daily Update',
            Cuplikan: '',
        },
    ]);

    return (
        <View style={{backgroundColor: 'white'}}>
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
                    <FlatList
                        data={Baru}
                        renderItem={({ item }) => (
                            <TouchableOpacity>
                                <View style={{
                                    marginRight: 10,
                                    marginLeft: 10,
                                    marginTop: 20,
                                    marginBottom: 10,
                                    backgroundColor: 'white',
                                    flex: 1,
                                    flexDirection: 'row'
                                }}>

                                    <View>
                                        <Text style={{
                                            marginTop: 15,
                                            marginLeft: 20,
                                            color: 'black',
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }}>{item.Judul}</Text>
                                        <Text style={{
                                            marginLeft: 20,
                                            marginTop: 10,
                                        }}>{item.Status}</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <Image
                                            source={item.image}
                                            style={{
                                                width: 100,
                                                height: 120,
                                                marginTop: 20,
                                                marginRight: 20,
                                                marginBottom: 15,

                                            }}
                                            resizeMode={'cover'}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
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
                <FlatList
                    data={Trending}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row'
                            }}>
                                <Image
                                    source={item.image}
                                    style={{ 
                                        width: 80, 
                                        height: 100, 
                                        marginLeft: 15,
                                        marginTop: 15,
                                    }}
                                        resizeMode={'cover'} 
                                    />
                                <View>
                                    <Text style={{
                                        color: 'black',
                                        marginTop: 25,
                                        marginLeft: 20,
                                        fontWeight: 'bold'
                                    }}>{item.judul}</Text>
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 10,
                                    }}>{item.Status}</Text>
                                    <Text style={{
                                        marginLeft: 10,
                                    }}>{item.Cuplikan}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </View>
    );
};

export default App;

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
        backgroundColor: 'lightskyblue',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
})

