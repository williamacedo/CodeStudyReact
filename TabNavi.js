import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import TelaInicial from './src/TelaInicial';
import Conversa from './src/Conversa';
import Config from './src/Config';

const Navegador = createBottomTabNavigator({
  Home: {
    screen:TelaInicial
  },
  Conversa: {
    screen:Conversa
  },
  Config: {
    screen:Config
  }
});
export default Navegador;
