import React, { Component } from 'react'
import { View, StyleSheet, Flatlist } from 'react-native';

import api from './srchttp/services/api.js'
import Filmes from './srchttp/filmes'

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
    filmes:[]
    };
  }
  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes')
    this.setState({
      filmes:response.data
    });
  }
  render(){
    return(
      <View style={styles.container}>
          
          <Flatlist
          data={this.state.filmes}
          keyExtractor={item => item.id.toString() }
          renderItem={({item}) => <Filmes data={item}/>}
          />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
   },

});

export default App;