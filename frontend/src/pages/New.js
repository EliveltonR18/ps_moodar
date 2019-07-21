import { KeyboardAvoidingView, Slider, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';

import DatePicker from 'react-native-datepicker';
import api from '../services/api';

class New extends Component {
  year = new Date().getFullYear();
  monthAux = new Date().getMonth();
  month = this.monthAux + 1;
  day = new Date().getDate();
  state = {
    commenter: '',
    stress:'',
    stressSlider: 5,
    minStress: 0,
    maxStress: 10,       
    dateMax: this.day + '/' +  this.month + '/' + this.year,
    date: this.day + '/' +  this.month + '/' + this.year,
  }

  handleSubmit = async () => {
    let year;
    let month;
    let day;

    [day,month,year] = this.state.date.split('/');

    const data = {
      commenter: this.state.commenter,
      stress: this.state.stressSlider,
      date: year + '-' + month + '-' + day,
    }

    await api.post('fellings', data);

    this.props.navigation.navigate('History');
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
            style={{flex:1}}
            behavior='position'
            enabled
          > 
          <Text style={styles.title}>Preencha os campos abaixo:</Text>
          <Text>Selecione a data:</Text>
          <DatePicker
          style={{width: 200}}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          format="DD/MM/YYYY"
          minDate="01/01/2019"
          maxDate={this.state.dateMax}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36,
              borderRadius:8,
            },
            
          }}
          onDateChange={date => {this.setState({date: date})}}
          />
          
          <Text style={styles.text}>Marque seu nível de estresse:</Text>
        
          <Slider
            style={styles.slider}
            minimumValue={this.state.minStress} 
            maximumValue={this.state.maxStress}
            value={this.state.stressSlider}
            onValueChange={val => this.setState({ stressSlider: val })}
            step={1}
            thumbTintColor='rgb(255, 95, 119)'
            maximumTrackTintColor='rgb(255, 95, 119)' 
            minimumTrackTintColor='rgb(255, 95, 119)'
          />

          <View style={styles.textCon}>
              <Text style={styles.colorSlider}>{this.state.minStress}</Text>
              <Text style={styles.colorSlider}>
                  {this.state.stressSlider}
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
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:20
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  slider:{
    width:300,
    height:30,
  },
  text:{
    fontSize: 16,
    paddingVertical:20,
    fontWeight: 'bold'
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
  textCon: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  colorSlider: {
      color: 'rgb(255, 95, 119)'
  },

});

export default New;