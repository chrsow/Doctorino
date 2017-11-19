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
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import App from './src';
import Home from './src/components/Home';
// import RfidRegister from './src/components/RfidRegister';

// import reducers from './src/reducers/index'
// import { Provider } from 'react-redux'
// import thunkMiddleware from 'redux-thunk'
// import { createStore, applyMiddleware } from 'redux'
// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

// // const SCREEN_WIDTH = Dimensions.get('window').width;
// const store = createStoreWithMiddleware(reducers);

// const CustomDrawerContentComponent = props => (
//   <View style={{ flex: 1, backgroundColor: '#43484d' }}>
//     <View
//       style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
//     >
//       {/* <Image
//         source={require('./src/assets/img/logo.jpg')}
//         style={{ width: SCREEN_WIDTH * 0.57 }}
//         resizeMode="contain"
//       /> */}
//     </View>
//     <DrawerItems {...props} />
//   </View>
// );

const Doctorino = ()=>(
	// <Provider store={store}>
	// 	<App/>
	// </Provider>
	<App/>
	// <Home/>
	// <RfidRegister/>
);

AppRegistry.registerComponent('Doctorino', () => Doctorino);

export default Doctorino;
