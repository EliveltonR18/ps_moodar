import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import list from '../assets/list.png'
import plus from '../assets/plus.png'

export default class Main extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
                <Image style={{width:20, height:20}} source={plus}></Image>
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate('History')}>
                <Image style={{width:20, height:20}} source={list}></Image>
            </TouchableOpacity>
        ),
    });
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>É extremamente importante para o seu tratamento, que você esteja
            sempre atualizando seus dados sobre o nível estresse diário. </Text>
            <Text style={styles.text}>Clique no + e adicione agora o seu nível de estresse! </Text>
            <Text style={styles.text}>Para ver seu histórico de estresse, clique no ícone à esquerda. </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    text:{
        padding: 20,
        fontSize:18,
        fontStyle: 'normal',
        textAlign:'justify',
    }

})
