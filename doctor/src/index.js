/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, Dimensions, Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Login from './components/Login';
import reducers from './reducers/index'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const SCREEN_WIDTH = Dimensions.get('window').width;
const store = createStoreWithMiddleware(reducers);

const AppNavigator = StackNavigator({
	// RfidRegister:{screen: RfidRegister},
	Login: {screen: Login},
	Home:{screen: Home}
},{
	headerMode: 'screen'
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;