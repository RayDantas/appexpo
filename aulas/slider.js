import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import {Slider} from '@miblanchard/react-native-slider';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor: 0,
    };
  }
  render(){
    return(
      <View style={styles.container}>
        <Slider
          minimumValue = {0}
          maximumValue = {100}
          value={this.state.valor}
          onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
          minimumTrackTintColor='#00ff00'
          maximumTrackTintColor='#0000ff'
        />

        <Text style={{textAlign:'center', fontSize: 30}}>
         Você tem {this.state.valor} kg
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,
   }
})