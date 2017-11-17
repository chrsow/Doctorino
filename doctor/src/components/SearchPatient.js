import React from 'react';
import {View} from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';

import axios from 'axios';
import _ from 'lodash';

export default class SearchPatient extends React.Component{
	static navigationOptions = { 
		title: 'Search for Patient',
	};

	constructor(props){
		super(props);
		this.state = {
			patientsList:[
				{
					first_name: 'Wasin',
					last_name: 'Saengow',
					email: 'som@gmail.com',
					password: 'somsom',
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					date: '20 Aug 2017'
				},
				{
					first_name: 'Wasin',
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					date: '20 Aug 2017'
				},
				{
					first_name: 'Chris Jackson',
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					date: '20 Aug 2017'
				}
			],
			activePatientsList:[]
		}
	}
	componentWillMount(){
		this.setState({activePatientsList:this.state.patientsList});
	}

	onSearchTextChange(){
		
	}

	onPressButton({ first_name, last_name, email, password }){
		// alert('Please Scan Smart Bracelet');
		// axios.post('http://10.21.240.151:3001/api/assign/patient',{
		// 	first_name,
		// 	last_name,
		// 	email,
		// 	password
		// }).then((res)=>{
		// 	alert('Add successful');
		// })
		
	}

	renderPatientsList(){
		const patientsList = this.state.activePatientsList;

		return(
			<List containerStyle={{marginBottom: 20}}>
				{
					patientsList.map((l, i) => (
						<ListItem
							button
							onPress={()=>this.onPressButton(l)}
							roundAvatar
							avatar={{uri:l.avatar_url}}
							key={i}
							title={l.first_name}
							subtitle={l.date}
							rightIcon={{name: 'add'}}
						/>
					))
				}
			</List>
		);
	}

	render(){
		return(
			<View>
				<SearchBar
					lightTheme	
					round
					onChangeText={()=>this.onSearchTextChange()}
					placeholder='Search' />
					{this.renderPatientsList()}
			</View>
		);
	}
}