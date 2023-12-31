import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';

const App = ({ navigation }) => {
  const [kategori, setKategori] = useState([
    {
      nama: 'Rekomendasi',
    },
    {
      nama: 'Cerita Anak',
    },
    {
      nama: 'Pengetahuan',
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
    {
      namaBuku: 'Kisah Sang Kancil', deskripsi: 'Cerita Anak',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/1.jpg')
    },
    {
      namaBuku: 'Ayo, Membaca', deskripsi: 'Pengetahuan',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/2.jpg')
    },
    {
      namaBuku: 'REGANTARA', deskripsi: 'Novel',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/9.jpg')
    },
    {
      namaBuku: 'Menjadi Putri Raja', deskripsi: 'Komik',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/8.jpg')
    },
    {
      namaBuku: 'Ayo, Menghitung', deskripsi: 'Pengetahuan',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/6.jpg')
    },
  ]);

  const [dataGenre, setDataGenre] = useState([
    {
      namaGenre: 'Cerita Anak',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/anak-anak.jpg',
      )
    },
    {
      namaGenre: 'Pengetahuan',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/pengetahuan.jpg')
    },
    {
      namaGenre: 'Novel',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/novel.jpg')
    },
    {
      namaGenre: 'Komik',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/komik.jpg')
    },
  ]);

  const [dataLanjut, setDataLanjut] = useState([
    {
      namaLanjut: 'LAUT',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/10.jpeg')
    },
    {
      namaLanjut: 'Petualangan Sherina',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/7.jpeg')
    },
    {
      namaLanjut: 'Komik Anak Muslim',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/12.jpeg')
    },
    {
      namaLanjut: 'Menjadi Putri Raja',
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/8.jpg')
    },
  ]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', }}>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{
            marginLeft: 10,
            marginTop: 20,
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
            Pilihan Terbaik Untukmu
          </Text>
          <View style={{ alignItems: 'flex-end', flex: 1 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Pilihan')}>
              <Image
                source={require('/Users/Diyah/belajarkuy/Tugas/src/images/right-chevron.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 20,
                  marginRight: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={kategori}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
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
                  borderColor: 'gray',
                  borderWidth: 0.5,
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
        <View style={{ flex: 1 }}>
          <FlatList
            data={dataRekomendasi}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Cerita')}>
                <View style={{
                  marginRight: 10,
                  marginLeft: 10,
                  marginTop: 10,
                  marginBottom: 10,
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 10,
                }}>
                  <Image
                    source={item.image}
                    style={{ width: 80, height: 110, }}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={{
                      color: 'black',
                    }}
                  >{item.namaBuku}
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      fontSize: 12,
                    }}
                  >{item.deskripsi}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <Text style={{
          marginLeft: 10,
          marginTop: 20,
          fontSize: 15,
          fontWeight: 'bold',
          color: 'black',
        }}>
          Genre
        </Text>
        <View>
          <FlatList
            data={dataGenre}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={{
                  margin: 10,
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 10,
                  borderColor: 'lightskyblue',
                  borderWidth: 3,
                }}>
                  <Image
                    source={item.image}
                    style={{ width: 90, height: 40 }}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={{
                      color: 'black',
                    }}
                  >{item.namaGenre}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View>
          <Text style={{
            marginLeft: 10,
            marginTop: 20,
            fontSize: 13,
            fontWeight: 'bold',
            color: 'black',
          }}>
            Lanjutkan Membaca
          </Text>
          <FlatList
            data={dataLanjut}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={{
                  margin: 10,
                  backgroundColor: 'white',
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 10,
                }}>
                  <Image
                    source={item.image}
                    style={{ width: 80, height: 110 }}
                    resizeMode={'cover'}
                  />
                  <Text
                    style={{
                      color: 'black',
                    }}
                  >{item.namaLanjut}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
};

export default App;


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




