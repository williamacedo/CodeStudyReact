import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class TelaInicial extends Component {

  static navigationOptions = ({navigation}) => ({
    title:'Chat'
  });

  constructor(props) {
    super(props);
    this.state = {nome:''};
    this.conversar = this.conversar.bind(this);
  }

  conversar() {

    this.props.navigation.navigate('Conversa',{
      nome:this.state.nome
  });

  }

  render() {
    return (
      <View>
        <TextInput style={{height: 40, borderWidth: 1, borderColor: '#000000', width: 200}} placeholder="Qual seu nome?" onChangeText={(nome) => this.setState({nome})} />
        <Button title="Conversar" onPress={this.conversar} />
      </View>
    );
  }

}

class Conversa extends Component {

  static navigationOptions = ({navigation}) => ({
    title:navigation.state.params.nome
  });

  render() {
    return (
      <View>
        <Text>Conversa</Text>
      </View>
    );
  }

}

const Navegador = createStackNavigator({
  Home: {
    screen:TelaInicial
  },
  Conversa: {
    screen:Conversa
  }
});
export default Navegador;
