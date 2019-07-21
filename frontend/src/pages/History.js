import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import FellingCard from '../components/FellingCard'
import api from '../services/api';

export default class History extends Component {
    state = {
        fellings:[],
    }
    async componentDidMount() {
        const response = await api.get('fellings');

        this.setState({ fellings: response.data })
    }
    handleClickCard = item =>{
        this.props.navigation.navigate('Update', {id: item._id});
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Histórico de Estresse</Text>
                </View>
                <FlatList
                    data={this.state.fellings}
                    keyExtractor={felling => felling._id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => {this.handleClickCard(item)}}>
                            <FellingCard style={styles.fellingCard} item={item}/>
                        </TouchableOpacity>
                    )}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        fontSize: 20,
        alignSelf: 'center',
        padding: 20,
    },
    titleContainer:{
        backgroundColor: '#ffb6c1',
    }
});