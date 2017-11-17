import React from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import { Text, Button, Icon, SocialIcon, Card, FormLabel, FormInput, Tabs, Tab} from 'react-native-elements';

import Profile from './Profile';
import Patient from './Patient';
// import SearchPatient from './SearchPatient';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

console.disableYellowBox = true;

export default class Home extends React.Component {
	// static navigationOptions = {
	// 	header: {
	// 		// visible: false
	// 	}
	// };
	static navigationOptions = { header: null };
	
	constructor() {
		super()
		this.state = {
			selectedTab: 'patients',
		}

		this.changeTab = this.changeTab.bind(this);
	}

	changeTab (selectedTab) {
		this.setState({selectedTab})
	}	

  render() {
		const { navigate } = this.props.navigation;
		const { selectedTab } = this.state

    return (
      // <ScrollView>
      //   <View style={styles.hero}>
      //     <Icon color="white" name="whatshot" size={62} type="material" />
      //     <Text style={styles.heading}>RFID Register</Text>
      //   </View>
      //   <Button
      //     buttonStyle={styles.button}
      //     backgroundColor={socialColors.facebook}
      //     icon={{ name: 'account', type: 'material-community' }}
      //     onPress={() =>
      //       navigation.navigate('RfidRegister')}
      //     title="Register"
      //   />
			// 	{/* <FormValidationMessage>Error message</FormValidationMessage> */}
			// </ScrollView>
			<Tabs>
				<Tab
					titleStyle={{fontWeight: 'bold', fontSize: 10}}
					selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
					selected={selectedTab === 'patients'}
					title={selectedTab === 'patients' ? 'PATIENTS' : null}
					renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='people' size={33} />}
					renderSelectedIcon={() => <Icon color={'#6296f9'} name='people' size={30} />}
					onPress={this.changeTab('patients')}>
					<Patient />
				</Tab>
				<Tab
					titleStyle={{fontWeight: 'bold', fontSize: 10}}
					selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
					selected={selectedTab === 'profile'}
					title={selectedTab === 'profile' ? 'PROFILE' : null}
					renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
					renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
					onPress={this.changeTab('profile')}>
					<Profile />
				</Tab>
			</Tabs>
		)
	}

}

// const HomeStack = StackNavigator({
// 	Home:{screen:Home},
// 	SearchPatient:{screen:SearchPatient}
// });

// export default HomeStack;

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
  },
  hero: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2,
  },
  titleContainer: {},
  button: {
    marginTop: 15,
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black,
      },
    }),
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});