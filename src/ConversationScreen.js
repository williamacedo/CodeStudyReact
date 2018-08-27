import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import ConversationScreenList from './ConversationScreenList';
import ConversationScreenChat from './ConversationScreenChat';

const Navegador = createStackNavigator({
	ConversationScreenList:{
		screen:ConversationScreenList
	},
	ConversationScreenChat:{
		screen:ConversationScreenChat
	}
});
export default Navegador;
