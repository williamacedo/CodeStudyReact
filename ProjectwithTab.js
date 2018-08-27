import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import TelaInicial from './src/TelaInicial';
import ConversationScreen from './src/ConversationScreen';
import ConfigScreen from './src/ConfigScreen';

const Navegador = createBottomTabNavigator({
	Home: {
		screen:TelaInicial
	},
	Conversa: {
		screen:ConversationScreen
	},
  Config: {
    screen:ConfigScreen
  }
});
export default Navegador;
