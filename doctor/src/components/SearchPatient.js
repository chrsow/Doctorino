import React from 'react';
import {View} from 'react-native';
import { SearchBar, List, ListItem } from 'react-native-elements';
import patientList from '../patients'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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
		const patients = _.filter(patientList, patient => {
			if (_.includes(patient.name, e.target.value) || _.includes(patient.name, e.target.value) || _.includes(patient.name, e.target.value)) {
				return true
			}
			return false
		})
		this.setState({ filteredPatientList: patients })
	}

	onPressButton = ({ first_name, last_name, avatar_url, date }) => {
		this.props.dispatch({
			type: 'ADD_PATIENT',
			data: {
				first_name,
				last_name,
				avatar_url,
				date
			}
		})
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
					onChangeText={()=>this.onSearchTextChange()}
					placeholder='Search' />
					{this.renderPatientsList()}
			</View>
		);
	}
}

export default connect()(SearchPatient);