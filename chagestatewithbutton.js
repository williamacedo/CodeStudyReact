import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    this.state = {inputTexto:'', texto:''};

    this.apertouBotao = this.apertouBotao.bind(this);
  }



  apertouBotao() {
    let s = this.state;
    s.texto = "Olá, "+s.inputTexto;
    this.setState(s);
  }

  render() {
    return (
      <View style={{paddingTop: 30}}>
        <TextInput style={styles.input} placeholder="Qual seu nome" onChangeText={(inputTexto) => this.setState({inputTexto})} />

        <Button title="Aperte em mim" onPress={this.apertouBotao} />
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    padding: 10
  },
  texto: {
    fontSize: 20,
    textAlign: 'center' 
  }
});