import React from 'react';
import {View} from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';
import patientList from '../patients'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import firebase from '../firebase';

import axios from 'axios';
import _ from 'lodash';

class SearchPatient extends React.Component{
	static navigationOptions = { 
		title: 'Search for Patient',
	};

	constructor(props){
		super(props);
		this.state = {
			filteredPatientList: patientList 
		}
	}

	onSearchTextChange = (e) => {
		console.log(e.length, patientList)
		if(e.length === 0) {
			this.setState({ filteredPatientList: patientList })
			return ;
		}
		const patients = _.filter(patientList, patient => {
			console.log(patient)
			return (_.includes(patient.first_name.toLowerCase(), e.toLowerCase()) || _.includes(patient.last_name.toLowerCase(), e.toLowerCase()))
		})
		this.setState({ filteredPatientList: patients })
	}

	// onPressButton = ({ first_name, last_name, avatar_url, date }) => {
	onPressButton = (patient) => {
		const patients = firebase.database().ref('patients');
		const newPatient = patient;
		patients.push(newPatient);
		console.log('Added to firebase :)');
		// this.props.dispatch({
		// 	type: 'ADD_PATIENT',
		// 	data: {
		// 		first_name,
		// 		last_name,
		// 		avatar_url,
		// 		date
		// 	}
		// })

	}

	renderPatientsList(){
		const patients = this.state.filteredPatientList;

		return(
			<List containerStyle={{marginBottom: 20}}>
				{
					patients.map((patient, i) => (
						<ListItem
							button
							onPress={this.onPressButton(patient)}
							roundAvatar
							avatar={{uri:patient.avatar_url}}
							key={i}
							title={patient.first_name}
							subtitle={patient.date}
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
					onChangeText={this.onSearchTextChange}
					placeholder='Search' />
					{this.renderPatientsList()}
			</View>
		);
	}
}

export default connect()(SearchPatient);