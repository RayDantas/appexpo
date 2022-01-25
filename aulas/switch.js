import React, { Component } from 'react'
import { View, StyleSheet, Text, Switch } from 'react-native'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: false
    };
  }
  render(){
    return(
      <View style={styles.container}>
      
      <Switch
      value={this.state.status}
      onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
      thumbColor="#ff0000"
      />
      
      <Text style={{textAlign: 'center', fontSize: 30}}>
        {(this.state.status) ? "ativo" : "inativo"}
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