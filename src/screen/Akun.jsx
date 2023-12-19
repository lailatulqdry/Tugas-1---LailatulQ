import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

export default class Akun extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.3, backgroundColor: 'dodgerblue'}}></View>
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
                                }}>Lailatul Qodriyah
                            </Text>
                        </View>
                            <Text style={{
                                color: 'gray',
                                fontWeight: '300',
                                textAlign: 'center',
                                fontStyle: 'italic',
                                }}>my account
                            </Text>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity 
                                onPress={() => this.props.navigation.navigate('Profile')}>
                                <Text style={{
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop :15,
                                    color : 'black',
                                    }}>My Profile
                                </Text>
                            </TouchableOpacity>
                            <View style={{alignItems: 'flex-end', flex: 1}}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                    style={{
                                        width: 20, 
                                        height: 20,
                                        marginTop: 15,
                                        marginRight: 20,}}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Text style={{
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop :15,
                                    color : 'black',
                                    }}>Bantuan
                                </Text>
                            </TouchableOpacity>
                            <View style={{alignItems: 'flex-end', flex: 1}}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                    style={{
                                        width: 20, 
                                        height: 20,
                                        marginTop: 15,
                                        marginRight: 20,}}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Text style={{
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop :15,
                                    color : 'black',
                                    }}>Pengaturan
                                </Text>
                            </TouchableOpacity>
                            <View style={{alignItems: 'flex-end', flex: 1}}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                    style={{
                                        width: 20, 
                                        height: 20,
                                        marginTop: 15,
                                        marginRight: 20,}}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity>
                                <Text style={{
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop :15,
                                    color : 'black',
                                    }}>Contact Us
                                </Text>
                            </TouchableOpacity>
                            <View style={{alignItems: 'flex-end', flex: 1}}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                    style={{
                                        width: 20, 
                                        height: 20,
                                        marginTop: 15,
                                        marginRight: 20,}}
                                />
                            </View>
                        </View>
                        <TouchableOpacity>
                        <Text style={{
                            backgroundColor: 'dodgerblue',
                            margin: 50,
                            textAlign: 'center',
                            borderRadius: 50,
                            padding: 10,
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: 'white',
                            }}>
                            Sign Out
                        </Text>
                        </TouchableOpacity>
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