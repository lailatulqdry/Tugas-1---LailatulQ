import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Beranda from './screen/Beranda';
import Akun from './screen/Akun';
import Library from './screen/Library';
import Profile from './screen/Profile';
import MyProfile from './screen/MyProfile';
import awal from './screen/Awal';
import Pilihan from './screen/Pilihan';
import Cerita from './screen/Cerita';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false
      }}
    >
      <Tab.Screen
        name="Beranda"
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={Beranda} />
      <Tab.Screen name="Library"
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="library" color={color} size={size} />
          ),
        }}
        component={Library} />
      <Tab.Screen name="Akun"
        options={{
          headerShown: false, tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={Akun} />
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Awal">
        <Stack.Screen
          name="Beranda"
          options={{
            headerShown: false,
          }}
          component={Tabs}
        />
        <Stack.Screen
          name="Akun"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) =>
              <MaterialCommunityIcons name="account" color={color} size={size} />
          }}
          component={Akun}
        />
        <Stack.Screen
          name="Library"
          options={{ headerShown: false }}
          component={Library}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
        />
        <Stack.Screen
          name='MyProfile'
          component={MyProfile}
        />
        <Stack.Screen
          name='Awal'
          options={{ headerShown: false }}
          component={awal}
        />
        <Stack.Screen
          name='Pilihan'
          options={{ headerShown: false }}
          component={Pilihan}
        />
        <Stack.Screen
          name='Cerita'
          options={{ headerShown: false }}
          component={Cerita}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;

/*export default function App() {
  return (
    <View style={layout.box}>
      <Text style={{fontSize: 20}}>belajarKuy</Text>
      <Tombol label={'Save'}
      onPress={() => Alert.alert('Info', 'Berhasil di Simpan')}
       />
      <Card />
    </View>
  )
}

const layout = StyleSheet.create({
  box: {
    margin: 20,
    borderWidth: 1,
    padding: 10,
  }
});*/