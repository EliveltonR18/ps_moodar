import { KeyboardAvoidingView, Slider, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import api from '../services/api';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default class Update extends Component {
    state = {
        felling: [],
        id:'',
        commenter: '',
        stress:'',
        stressSlider: 5,
        minStress: 0,
        maxStress: 10,
    }       
    async componentDidMount(){
        const response = await api.get(`fellings/${this.state.id}`)
        this.setState({ felling: response.data });
    }

    handleSubmit = async () => {    
        const data = {
          commenter: this.state.commenter,
          stress: this.state.stressSlider
        }

        await api.put(`fellings/${this.state.id}`, data);
        this.props.navigation.navigate('History');
    }
    render() {
        const felling = this.state.felling;
        const { navigation } = this.props;
        const idFelling = navigation.getParam('id');
        this.state.id = idFelling;
        
        return (
            <View style={styles.containerG}>
                <KeyboardAvoidingView
                    style={{flex:1}}
                    behavior='position'
                    enabled
                > 
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Seu estresse há {distanceInWords(felling.date, new Date(), {
                            locale: pt
                        })}</Text> 
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.text}>Marque seu nível de estresse:</Text>
            
                        <Slider
                        style={styles.slider}
                        minimumValue={this.state.minStress} 
                        maximumValue={this.state.maxStress}
                        value={this.state.felling.stress}
                        onValueChange={val => this.setState({ stressSlider: val })}
                        step={1}
                        thumbTintColor='rgb(255, 95, 119)'
                        maximumTrackTintColor='rgb(255, 95, 119)' 
                        minimumTrackTintColor='rgb(255, 95, 119)'
                        />
                        <View style={styles.textCon}>
                            <Text style={styles.colorSlider}>{this.state.minStress}</Text>
                            <Text style={styles.colorSlider}>
                                {this.state.felling.stress}
                            </Text>
                            <Text style={styles.colorSlider}>{this.state.maxStress}</Text>
                        </View>

                        <Text style={styles.text}>Observações:</Text>

                        <TextInput
                            style={styles.textInput}
                            placeholder="Digite aqui..."
                            value={this.state.commenter}
                            onChangeText={commenter => this.setState({ commenter: commenter })}
                            numberOfLines={10}
                            textAlignVertical='top'
                            placeholderTextColor='rgb(255, 95, 119)'
                            selectionColor='rgb(255, 95, 119)'
                        />
                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
                                <Text style={styles.textButton}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerG:{
        flex:1
    },
    container:{
        padding:20
    },
    title:{
        fontSize: 20,
        alignSelf: 'center',
        padding: 20,
    },
    titleContainer:{
        backgroundColor: '#ffb6c1',
    },
    slider:{
        width:300,
        height:30,
    },
    text:{
        fontSize: 16,
        paddingVertical:10,
        fontWeight: 'bold'
    },
    textCon: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorSlider: {
        color: 'rgb(255, 95, 119)'
    },
    textInput:{
        borderStyle: 'solid',
        borderWidth:1,
        borderRadius: 8,
        fontSize:16,
        color:'#FF5f77',
        padding:10,
    },
    containerButton:{
        paddingVertical:30,
        alignItems: 'flex-end'
    },
    button:{
        backgroundColor:'#FF5f77',
        width:100,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    textButton:{
        textAlign:'center',
        fontSize:16,
        alignSelf: "center"
    },
});
