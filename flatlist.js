import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      flatData:[
        {key:"1", nome:'Bonieky', idade:90},
        {key:"2",nome:'Paulo', idade: 53},
        {key:"3",nome:'Pedro, idade:50'}
      ]
    };
  }

  flatRender(item) {
    return (
        <Text style={styles.flatItem}>{item.nome}, {item.idade} anos</Text>
    );
  }

  render() {

    return (
      <View style={styles.body}>
        <FlatList style={styles.flatList} data={this.state.flatData} renderItem={({item})=> this.flatRender(item)}/>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  body:{
    paddingTop: 20,
    flex:1
  },
  flatItem:{
    fontSize: 18,
    height: 40,
    padding: 10
  },
  flatList:{
    backgroundColor: '#FF0000',
    height: 20
  }
});