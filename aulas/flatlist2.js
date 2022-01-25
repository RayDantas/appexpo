import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Pessoas from './src/Pessoas'
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      feed: [
        {id: '1', nome: 'Ray', idade: 28, email: 'email@email.com'},
        {id: '2',nome: 'Joao', idade: 50, email: 'email@email.com'},
        {id: '3',nome: 'Pedro', idade: 44, email: 'email@email.com'},
        {id: '4',nome: 'Paulo', idade: 18, email: 'email@email.com'},       
        {id: '5',nome: 'José', idade: 18, email: 'email@email.com'},       
        {id: '6',nome: 'Ricardo', idade: 18, email: 'email@email.com'},       
      ]
    }
  }
  render(){
    return(
      <View style={styles.container}>
        
        <FlatList
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoas data={item}/>}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});

export default App;
