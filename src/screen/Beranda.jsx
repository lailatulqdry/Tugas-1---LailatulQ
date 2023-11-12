import React, {Component} from 'react';
import { StyleSheet, View, Text, } from 'react-native'
import Input from '../component/Input';

export default class Beranda extends Component {
    constructor(props) {
        super(props);

        this.state = {
            beranda: 'hello'
        };
    }

    render() {
      return (
            <View style={styles.box}> 
                <Text style={{color: 'skyblue', 
                    fontStyle: 'normal', 
                    fontWeight: 'bold', 
                    marginLeft: 10,
                    marginTop: 10,
                    fontSize:20,
                    }}>
                  {this.state.beranda}
                  <Text style={{color: 'black', 
                      fontStyle: 'normal', 
                      fontWeight: 'bold', 
                      marginLeft: 10,
                      marginTop: 10,
                      fontSize:25,
                      }}>diyah!
                  </Text>
                </Text>
                <Input placeholder={'Ketik Judul Buku'} typeKeyboard={'email'}/>
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
})