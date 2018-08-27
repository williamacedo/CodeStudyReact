import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import ConversaList from './ConversaList';
import ConversaChat from './ConversaChat';

const Navegador = createStackNavigator({
    ConversaList:{
      screen:ConversaList
    },
    ConversaChat:{
      screen:ConversaChat
    }
});
export default Navegador;
