import React from 'react';
import {View, Text} from 'react-native';
import { List, ListItem, CheckBox} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import firebase from '../firebase';

import SearchPatient from './SearchPatient';
import PatientDetail from './PatientDetail';

class Patient extends React.Component{
	static navigationOptions = { header: null };

	constructor(props){
		super(props);
		console.log(this.props.selectedPatients);
		this.state = {
			// patientList: this.props.selectedPatients
			patientList: []
		}
	}

	componentDidMount(){
		const patients = firebase.database().ref('patients');
		patients.on('value',snapshot => {
			let patientList = snapshot.val();
			console.log(patientList);
			let newPatientList = [];
			for (let patient in patientList) {
				console.log(patientList[patient]);
				newPatientList.push({
					avatar_url: patientList[patient].avatar_url,
					first_name: patientList[patient].first_name
				});
			}

			this.setState({patientList: newPatientList});
		});

		
	}

	renderPatientList(){
		const {navigate} = this.props.navigation;
		
		return(
			<View>
				<CheckBox center title="Add Patient" uncheckedIcon="plus" 
					onPress={()=>navigate('SearchPatient')} 
					containerStyle={{backgroundColor:'#6296f9'}
					}/>
				<List containerStyle={{marginBottom: 20}}>
					{
						this.state.patientList.map((l, i) => (
							<ListItem
								roundAvatar
								avatar={{uri:l.avatar_url	}}
								key={i}
								title={l.first_name}
								onPress={()=>{
										navigate('PatientDetail',{
											name:l.first_name,
											avatar_url:l.avatar_url
										})
									}
								}
							/>
						))
					}
				</List>
			</View>
		)
	}

	render(){
		return(
			<View>
				{this.renderPatientList()}
			</View>
		);
	}
}

const PatientStack = StackNavigator({
	Patient:{screen:Patient},
	SearchPatient:{screen:SearchPatient},
	PatientDetail:{screen:PatientDetail}
});

function mapStateToProps(state) {
	return {
		selectedPatients: state.selectedPatients
	}
}

// export default connect(mapStateToProps, null)(PatientStack);
export default PatientStack;
