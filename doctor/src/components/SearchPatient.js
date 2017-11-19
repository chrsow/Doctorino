import React from 'react';
import {View} from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';
// import patientList from '../patients'
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
		const patients = firebase.database().ref('patients');
		this.state = {
			patients,
			patientList: [],
			filteredPatientList: [],
			patientsInCareList: [] 
		}
	}

	componentDidMount(){
		// const patients = firebase.database().ref('patients');
		this.state.patients.on('value',snapshot => {
			let patientList = snapshot.val();
			console.log(patientList);
			let newPatientList = [];
			for (let patient in patientList) {
				console.log(patientList[patient]);
				newPatientList.push({
					avatar_url: patientList[patient].avatar_url,
					first_name: patientList[patient].first_name,
					last_name: patientList[patient].last_name
				});
			}

			this.setState({ patientList: newPatientList, filteredPatientList: newPatientList });
		});
		const patientsInCare = firebase.database().ref('patientsInCare')
		patientsInCare.on('value', snapshot => {
			let patientList = snapshot.val();
			let newPatientList = [];
			for (let patient in patientList) {
				console.log(patientList[patient]);
				newPatientList.push({
					avatar_url: patientList[patient].avatar_url,
					first_name: patientList[patient].first_name,
					last_name: patientList[patient].last_name
				});
			}
			this.setState({ patientsInCareList: newPatientList })
		})
	}

	onSearchTextChange = (e) => {
		const patientList = _.filter(this.state.patientList, patient => {
			return !(_.includes(this.state.patientsInCareList, patient))
		})
		console.log('XX', patientList, 'YY', this.state.patientsInCareList)
		if (e.length === 0) {
			this.setState({ filteredPatientList: patientList })
		} else {
			const filteredPatientList = _.filter(patientList, patient => {
				console.log(patient);
				return (_.includes(patient.first_name.toLowerCase(), e.toLowerCase()) || _.includes(patient.last_name.toLowerCase(), e.toLowerCase()))
			})
			this.setState({ filteredPatientList })
		}
	}

	// onPressButton = ({ first_name, last_name, avatar_url, date }) => {
	onPressButton = (patient) => {
		const {navigate} = this.props.navigation;

		// const patients = firebase.database().ref('patients');
		const patientsInCare = firebase.database().ref('patientsInCare');
		const newPatientInCare = patient;
		patientsInCare.push(newPatientInCare);
		navigate('Patient');
		// console.log('Added to firebase :)');

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
					patients.map((patient,i) => (
						<ListItem
							button
							onPress={()=>this.onPressButton(patient)}
							roundAvatar
							avatar={{uri:patient.avatar_url}}
							key={i}
							title={`${patient.first_name} ${patient.last_name}`}
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

// export default connect()(SearchPatient);
export default SearchPatient;