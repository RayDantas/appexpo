import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

// showsVerticalScrollIndicator={false} serve para não mostrar a barra de rolagem
// scrollEnabled={false} para não rolar
// horizontal={true} serve para virar as paradas para horizontal

class App extends Component {
  render(){
    return(
      <View style={styles.container}>

        <ScrollView>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  box1:{
    backgroundColor:'red',
    height: 250,
  },
  box2:{
    backgroundColor:'green',
    height: 250,
  },
  box3:{
    backgroundColor:'yellow',
    height: 250,
  },
  box4:{
    backgroundColor:'blue',
    height: 250,
  },
});

export default App;