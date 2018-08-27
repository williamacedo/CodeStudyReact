
import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import Item from './src/Item';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lista:[],
      input:''
    };

    this.url = 'https://b7web.com.br/todo/13183';

    this.addButton = this.addButton.bind(this);
    this.loadLista = this.loadLista.bind(this);

    this.loadLista();

  }

  loadLista() {
    fetch(this.url)
      .then((r)=>r.json())
      .then((json)=>{
        let state = this.state;
        state.lista = json.todo;
        this.setState(state);
      });
  }

  addButton() {
    let texto = this.state.input;

    let state = this.state;
    state.input = '';
    this.setState(state);

    fetch(this.url, {
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'aplication/json'
      },
      body:JSON.stringify({
        item:texto
      })
    })
      .then((r)=>r.json)
      .then((json) =>{
        alert("Item inserido com sucesso");
        this.loadLista();
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.addArea}>
          <Text style={styles.addTxt}>Adicione uma nova tarefa</Text>
          <TextInput style={styles.input} onChangeText={(text) => {
            let state = this.state;
            state.input = text;
            this.setState(state);
          }} value={this.state.input} />
          <Button title="Adicionar" onPress={this.addButton} />
        </View>
        <FlatList data={this.state.lista} renderItem={({item}) => <Item data={item} url={this.url} loadFunction={this.loadLista} />} keyExtractor={(item, index) => item.id} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  addArea:{
    marginBottom: 20,
    backgroundColor: '#DDDDDD',
  },
  input:{
    height: 40,
    backgroundColor:'#CCCCCC',
    marginLeft:20,
    marginRight:20,
    paddingLeft:10,
    paddingRight:10
  },
  addTxt:{
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10
  }
});
