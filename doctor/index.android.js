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
import RfidRegister from './src/components/RfidRegister';

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
	<App/>
	// <Home/>
	// <RfidRegister/>
);

export default Doctorino;

AppRegistry.registerComponent('Doctorino', () => Doctorino);
