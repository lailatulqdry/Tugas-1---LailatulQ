import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'


const App = ({ navigation }) => {

  const [data, setData] = useState([
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/1.jpg'),
      namaBuku: 'Kisah Sang Kancil', deskripsi: 'Cerita Anak',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/2.jpg'),
      namaBuku: 'Ayo, Membaca', deskripsi: 'Pengetahuan',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/6.jpg'),
      namaBuku: 'Ayo, Menghitung', deskripsi: 'Pengetahuan',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/9.jpg'),
      namaBuku: 'REGANTARA', deskripsi: 'Novel',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/11.jpg'),
      namaBuku: 'Pernikahan SMA', deskripsi: 'Novel',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/8.jpg'),
      namaBuku: 'Menjadi Putri Raja', deskripsi: 'Komik',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/3.jpg'),
      namaBuku: 'DAMIAN', deskripsi: 'Novel',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/4.png'),
      namaBuku: 'Grizella Sang Antagonis', deskripsi: 'Novel',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/5.png'),
      namaBuku: 'Peti Mati Berhantu', deskripsi: 'Cerita Anak',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/7.jpeg'),
      namaBuku: 'Petualangan Sherina', deskripsi: 'Cerita Anak',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/10.jpeg'),
      namaBuku: 'LAUT', deskripsi: 'Pengetahuan',
    },
    {
      image: require('/Users/Diyah/belajarkuy/Tugas/src/images/12.jpeg'),
      namaBuku: 'Sahabat Anak Muslim', deskripsi: 'Komik',
    },
  ]);

  const [filter, setFilter] = useState([
    { namaFilter: 'Cerita Anak', tipe: 'deskripsi' },
    { namaFilter: 'Pengetahuan', tipe: 'deskripsi' },
    { namaFilter: 'Novel', tipe: 'deskripsi' },
    { namaFilter: 'Komik', tipe: 'deskripsi' },
  ]);

  const [dataTampil, setdataTampil] = useState(data);

  function filterData(item) {
    let dataHasilFilter = [...data];

    if (item.tipe == 'deskripsi') {
      dataHasilFilter = dataHasilFilter.filter(x => x.deskripsi == item.namaFilter)
    }

    setdataTampil(dataHasilFilter);
  }

  return (
    <View style={{ backgroundColor: 'linen' }}>
      <View style={{ flexDirection: 'row' }}>
        <ImageBackground
          source={require('/Users/Diyah/belajarkuy/Tugas/src/images/bg.jpg')}
          style={{ width: 350, height: 100 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Library')}>
            <Image
              source={require('/Users/Diyah/belajarkuy/Tugas/src/images/back.png')}
              style={{
                width: 20,
                height: 20,
                margin: 20,
              }}
            />
          </TouchableOpacity>
          <View>
            <FlatList
              horizontal
              data={filter}
              renderItem={({ item }) =>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 10,
                    marginTop: 10,
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor: 'white',
                    opacity: 0.7,
                    color: 'black'
                  }}
                  onPress={() => filterData(item)}>
                  <Text style={{
                    color: 'black',
                  }}>{item.namaFilter}</Text>
                </TouchableOpacity>}
            />
          </View>
        </ImageBackground>
      </View>
      <ScrollView>
        <FlatList
          data={dataTampil}
          renderItem={({ item }) => (
            <View style={{
              backgroundColor: 'white',
              borderRadius: 10,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 30,
              padding: 10,
              flex: 1,
              flexDirection: 'row'
            }}>
              <Image
                source={item.image}
                style={{ width: 80, height: 100, marginLeft: 10 }}
                resizeMode={'cover'} />
              <View>
                <Text style={{
                  marginLeft: 10,
                  marginTop: 10,
                  color: 'black',
                }}>{item.namaBuku}</Text>
                <Text style={{
                  marginLeft: 10
                }}>{item.deskripsi}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default App;