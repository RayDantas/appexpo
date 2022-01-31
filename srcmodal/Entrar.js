import React, { Component } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';

export default class App extends Component {
  render() {
    return(
            <View style={{
            backgroundColor:'#292929',
            width:350,
            height:350,
            justifyContent: 'center',
            borderRadius:15,
            paddingTop:15,
            alignItems:'center'
            }}>
              <Text style={{color:'#fff', fontSize:28}}>Seja bem vindo</Text>
              <Button title="Sair" onPress={this.props.fechar}/>
            </View> 
    );
  }
}
