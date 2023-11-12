import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image } from 'react-native'

const App = () => {
    const [kategori, setKategori] = useState([
      {
        nama: 'Rekomendasi',
      },
      {
        nama: 'Cerita Anak',
      },
      {
        nama: 'Pelajaran',
      },
      {
        nama: 'Novel',
      },
      {
        nama: 'Komik'
      }
    ]);

    const [kategoriSeleksi, setKategoriSeleksi] = useState({
      nama: 'Rekomendasi',
    });

    const [dataRekomendasi, setDataRekomendasi] = useState([
      {namaBuku: 'Kisah Sang Kancil'},
      {namaBuku: 'Ayo, Belajar Membaca'},
    ])

    return (
      <View style={{flex: 1}}>
          <View>
            <FlatList
              data={kategori}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item})=> (
                  <TouchableOpacity>
                      <View style={{
                          marginRight: 10,
                          marginLeft: 10,
                          marginTop: 20,
                          marginBottom: 10,
                          backgroundColor: 
                            kategoriSeleksi.nama == item.nama ? 'dodgerblue' : 'white', /*kategori yang diselksi = item maka ingin warna*/
                          paddingHorizontal: 10,
                          paddingVertical: 6,
                          borderRadius: 15,
                          }}>
                      <Text
                        style={{
                          color: kategoriSeleksi.nama == item.nama ? 'white' : 'black',
                        }}
                        >{item.nama}</Text>
                      </View>
                  </TouchableOpacity>
              )}
            />
          </View>
        <View style={{flexDirection: 'row'}}>
            <Text style={{
              marginLeft: 10,
              marginTop: 20,
              fontSize: 15,
              fontWeight: 'bold',
              color: 'black',
              }}>
              Paling Populer
            </Text>
            <View style={{alignItems: 'flex-end', flex: 1}}>
              <TouchableOpacity>
                <Text style={{
                  marginTop: 25,
                  marginRight: 10,
                  fontSize: 12,
                  }}>
                  Lihat Semua
                </Text>
              </TouchableOpacity>
              </View>
          </View>
        <View style={{flex: 1}}>
            <FlatList
              data={dataRekomendasi}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item})=> (
                  <TouchableOpacity>
                      <View style={{
                          marginRight: 10,
                          marginLeft: 10,
                          marginTop: 10,
                          marginBottom: 10,
                          backgroundColor: 'white',
                          paddingHorizontal: 10,
                          paddingVertical: 6,
                          }}>
                      <Text
                        style={{
                          color: 'black',
                        }}
                        >{item.namaBuku}</Text>
                      </View>
                  </TouchableOpacity>
              )}
            />
        </View>
      </View>
    )
  };

export  default App;


/*export default class Library extends Component {
    render() {
        return (
            <View style={{marginTop: 10, flexDirection: 'row'}}>
                <Image
                    source={require('/Users/Diyah/belajarkuy/Tugas/src/images/search.png')}
                    style={{
                    width: 50, 
                    height: 50,
                    marginTop: 7,}}/>
                <Input placeholder={'Cari'} typeKeyboard={'email'}/>
            </View>
        )
    };
}*/


/*import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const App = () => {
    const [email, setEmail] = useState('');

    return (
        <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
                <TextInput 
                value={email}
                onChangeText={text => setEmail(text)}
                style={{backgroundColor: 'black'}}/>
                <TouchableOpacity>
                    <Text>Daftar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}*/




