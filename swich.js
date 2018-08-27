import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valor:false
    };
  }

  render() {

    return (
      <View style={styles.body}>
        <Switch thumbTintColor="#0000FF" onTintColor="#FF0000" value={this.state.valor} onValueChange={(v)=>this.setState({valor:v})} />
        <Text>{(this.state.valor)?"Selecionado":"Não selectionado"}</Text>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  body:{
    paddingTop: 20,
    flex:1
  }
});
