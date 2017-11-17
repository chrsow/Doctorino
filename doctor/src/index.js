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
// import RfidRegister from './components/RfidRegister';
import Login from './components/Login';
// import User from './components/User';

const SCREEN_WIDTH = Dimensions.get('window').width;

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

// const App = DrawerNavigator(
//   {
//     Home: {
//       path: '/home',
//       screen: Home,
// 		},
// 		// Register: {
// 		// 	path: '/rfid-register',
// 		// 	screen: RfidRegister
// 		// },
// 		User: {
// 			path: '/user',
// 			screen: User,
// 		}
//   },
//   {
//     initialRouteName: 'Home',
//     contentOptions: {
//       activeTintColor: '#548ff7',
//       activeBackgroundColor: 'transparent',
//       inactiveTintColor: '#ffffff',
//       inactiveBackgroundColor: 'transparent',
//       labelStyle: {
//         fontSize: 15,
//         marginLeft: 0,
//       },
//     },
//     drawerWidth: SCREEN_WIDTH * 0.8,
//     contentComponent: CustomDrawerContentComponent,
//   }
// );

const App = StackNavigator({
	// RfidRegister:{screen: RfidRegister},
	Login: {screen: Login},
	Home:{screen: Home}
},{
	headerMode: 'screen'	
});

export default App;

// export default class IOTapp extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('IOTapp', () => IOTapp);
