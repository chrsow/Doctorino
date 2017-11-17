import React from 'react';
import axios from 'axios';
// import https from 'https';

import {Button, Text, View, ScrollView, StyleSheet, Image, Platform } from 'react-native';
import {Icon, FormLabel,FormInput} from 'react-native-elements';
import { Bubbles } from 'react-native-loader';
import * as Keychain from 'react-native-keychain';

import colors from 'HSColors';
import socialColors from 'HSSocialColors';
import fonts from 'HSFonts';

export default class Login extends React.Component{
	// static navigationOptions = {
	// 	header: {
	// 		// visible: false
	// 	}
	// };
	static navigationOptions = { header: null };

	constructor(props){
		super(props);
		this.state={
			first_name:'',
			last_name:'',
			password: '',
			loading: false,
			doctor_id: '',
			email: '',
			validation_code: '',
			URL: 'http://10.21.240.151:3001'
		}
		this.onSubmitButton = this.onSubmitButton.bind(this);
	}

	componentDidMount(){
		// alert('Please Scan your RFID card')
		// axios.get(this.state.URL + '/api/rfid-register/doctor')
		// 	.then((res)=>{ alert('Fill your infomation') })
		// 	.catch((err)=>console.log(err));
	}

	onSubmitButton(){
		const { navigation } = this.props;
		// alert(this.state.name);
		// Keychain.setGenericPassword(this.state.username, this.state.password)
		// 	.then(()=>{
		// 		navigation.navigate('Home')			
		// 	});

		

		// const agent = new https.Agent({  
		// 	rejectUnauthorized: false
		// });
		
		// axios.post(this.state.URL + '/api/register/doctor', {
		// 	email: this.state.email,
		// 	first_name: this.state.first_name,
		// 	last_name: this.state.last_name,
		// 	password: this.state.password,
		// 	doctor_id: this.state.doctor_id,
		// 	user_type: 'doctor',
		// 	validation_code: this.state.validation_code
		// })//,{httpAgent:agent})
		// 	.then((res)=>{
		// 		alert('Register successful');
		// 		setTimeout(()=>navigation.navigate('Home'),2000);
		// 	}).catch((err)=>{
		// 		console.log(err);
		// 	});
		setTimeout(()=>navigation.navigate('Home'),2000);
		
		this.setState({loading:!this.state.loading});
	}

	renderLoading(){
		return(
			<View style={styles.loader}>
				<Text style={styles.loaderText}>Waiting for Registration</Text>
				<Bubbles size={10} color="#bbb"/>
			</View>
		)
	}

	renderRfidRegisterForm(){
		return(
			<View>
				<FormLabel>First name</FormLabel>
				<FormInput onChangeText={(first_name)=>this.setState({first_name})}/>
				<FormLabel>Surname</FormLabel>
				<FormInput onChangeText={(last_name)=>this.setState({last_name})}/>
				<FormLabel>Email</FormLabel>
				<FormInput onChangeText={(email)=>this.setState({email})}/>
				<FormLabel>Password</FormLabel>
				<FormInput onChangeText={(password)=>this.setState({password})}/>
				<FormLabel>Doctor ID</FormLabel>
				<FormInput onChangeText={(doctor_id)=>this.setState({doctor_id})}/>
				<FormLabel>Validation Code</FormLabel>
				<FormInput onChangeText={(validation_code)=>this.setState({validation_code})}/>
				<Button
					buttonStyle={styles.button}
					backgroundColor={socialColors.facebook}
					icon={{ name: 'account', type: 'material-community' }}
					onPress={() => this.onSubmitButton()}
					title="Login"
				/>
				
				{/* <FormValidationMessage>Error message</FormValidationMessage> */}
			</View>
		);
	}

	render(){
		// const Body = this.state.loading ? this.renderLoading():this.renderRfidRegisterForm();
		return(
			<ScrollView>
				<View style={styles.hero}>
					{/* <Image style={styles.image} 
						source={require('../assets/img/logo.jpg')}
					/> */}
					<Icon color="white" name="local-hospital" size={62} type="material" />
					<Text style={styles.heading}>DocCon Register</Text>
				</View>
				
				{this.state.loading ? 
					this.renderLoading():this.renderRfidRegisterForm()}
			</ScrollView>
		); 
	}	
}


const styles = StyleSheet.create({
  heading: {
    color: 'white',
    marginTop: 10,
		fontSize: 22,
		padding: 0
	},
	image:{
		// backgroundColor: '#ccc',
		flex: 1,
		resizeMode:'cover',
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
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
		padding: 40,
		color: 'black'
    // color: colors.grey2,
    // ...Platform.select({
    //   ios: {
    //     fontFamily: fonts.ios.black,
    //   },
    // }),
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
	},
	loaderText:{
		marginTop:70,
		marginBottom:15,
		fontSize: 30,
		color: '#555'
	},
	loader:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});