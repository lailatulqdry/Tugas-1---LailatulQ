import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default class Akun extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ flex: 0.3, backgroundColor: 'dodgerblue' }}>
                        <Image
                            source={require('/Users/Diyah/belajarkuy/Tugas/src/images/windbg.png')}
                            style={{
                                width: 310,
                                height: 150,
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/profil.jpg')}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        borderRadius: 100 / 2,
                                        borderWidth: 3,
                                        borderColor: 'lightgray',
                                        position: 'absolute',
                                    }} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginTop: 50 }}>
                            <Text style={{
                                color: 'black',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                marginTop: 5,
                            }}>Lailatul Qodriyah
                            </Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('MyProfile')}>
                            <Text style={{
                                color: 'gray',
                                fontWeight: '300',
                                textAlign: 'center',
                                fontStyle: 'italic',
                            }}>My Profile
                            </Text>
                        </TouchableOpacity>
                        <Text style={{
                            marginTop: 15,
                            marginLeft: 10,
                            color: 'black',
                            fontWeight: 'bold',
                        }}>Buku Saya</Text>
                        <View style={{ backgroundColor: 'lightgray', margin: 10, borderRadius: 8, }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                    <Image
                                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/user.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginTop: 15,
                                            marginLeft: 10,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Profile')}>
                                    <Text style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginTop: 15,
                                        color: 'black',
                                    }}>Koleksi Buku
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                        <Image
                                            source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
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
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/privacy.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 15,
                                        marginLeft: 10,
                                    }}
                                />
                                <TouchableOpacity>
                                    <Text style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginTop: 15,
                                        color: 'black',
                                    }}>Bacaan Terakhir
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                    <Image
                                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginTop: 15,
                                            marginRight: 20,
                                            marginBottom: 15,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={{
                            marginTop: 5,
                            marginLeft: 10,
                            color: 'black',
                            fontWeight: 'bold',
                        }}>Account</Text>
                        <View style={{ backgroundColor: 'lightgray', margin: 10, borderRadius: 8, }}>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                    <Image
                                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/user.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginTop: 15,
                                            marginLeft: 10,
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Profile')}>
                                    <Text style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginTop: 15,
                                        color: 'black',
                                    }}>Edit Profile
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                        <Image
                                            source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
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
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/privacy.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 15,
                                        marginLeft: 10,
                                    }}
                                />
                                <TouchableOpacity>
                                    <Text style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginTop: 15,
                                        color: 'black',
                                    }}>Privacy
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                    <Image
                                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginTop: 15,
                                            marginRight: 20,
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/notification.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 15,
                                        marginLeft: 10,
                                    }}
                                />
                                <TouchableOpacity>
                                    <Text style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginTop: 15,
                                        marginBottom: 15,
                                        color: 'black',
                                    }}>Notifications
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                    <Image
                                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginTop: 15,
                                            marginRight: 20,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={{
                            marginTop: 5,
                            marginLeft: 10,
                            color: 'black',
                            fontWeight: 'bold',
                        }}>Support & About</Text>
                        <View style={{ backgroundColor: 'lightgray', margin: 10, borderRadius: 8, }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/information.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 15,
                                        marginLeft: 10,
                                    }}
                                />
                                <TouchableOpacity>
                                    <Text style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginTop: 15,
                                        color: 'black',
                                    }}>Help & Support
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                    <Image
                                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginTop: 15,
                                            marginRight: 20,
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/contact-mail.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 15,
                                        marginLeft: 10,
                                    }}
                                />
                                <TouchableOpacity>
                                    <Text style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginTop: 15,
                                        color: 'black',
                                    }}>Contact Us
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                    <Image
                                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginTop: 15,
                                            marginRight: 20,
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/group.png')}
                                    style={{
                                        width: 20,
                                        height: 20,
                                        marginTop: 15,
                                        marginLeft: 10,
                                    }}
                                />
                                <TouchableOpacity>
                                    <Text style={{
                                        marginLeft: 10,
                                        marginRight: 10,
                                        marginTop: 15,
                                        marginBottom: 15,
                                        color: 'black',
                                    }}>Add account
                                    </Text>
                                </TouchableOpacity>
                                <View style={{ alignItems: 'flex-end', flex: 1 }}>
                                    <Image
                                        source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginTop: 15,
                                            marginRight: 20,
                                        }}
                                    />
                                </View>
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
                </ScrollView>
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