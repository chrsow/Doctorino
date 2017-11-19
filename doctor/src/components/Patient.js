import React from 'react';
import {View, Text, Alert} from 'react-native';
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
		const patientsInCare = firebase.database().ref('patientsInCare');
		patientsInCare.on('value',snapshot => {
			let patientInCareList = snapshot.val();
			let newPatientList = [];
			for (let patient in patientInCareList) {
				newPatientList.push({
					avatar_url: patientInCareList[patient].avatar_url,
					first_name: patientInCareList[patient].first_name,
					last_name: patientInCareList[patient].last_name,
					heart_rate: patientInCareList[patient].heart_rate
				});
			}
			console.log(newPatientList)
			this.setState({patientList: newPatientList});
			// this.setState({patientList: patientInCareList});
		});

		const HeartRate = firebase.database().ref('patients/1');
		HeartRate.on('value',snapshot=>{
			const {first_name, last_name, heart_rate} = snapshot.val();
			if(parseInt(heart_rate)>100){
				Alert.alert(
					'Warning',
					`${first_name} ${last_name}'s heart rate is ${heart_rate}`,
					[
						{text:'Call emergency', onPress:()=>{}}
					]
				);
			}
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
						this.state.patientList.map((patientInCare, i) => (
							<ListItem
								roundAvatar
								avatar={{uri:patientInCare.avatar_url	}}
								key={i}
								title={`${patientInCare.first_name} ${patientInCare.last_name}`}
								// rightTitle={`Heart rate: ${patientInCare.heart_rate}`}
								onPress={()=>{
										navigate('PatientDetail',{
											first_name:patientInCare.first_name,
											last_name:patientInCare.last_name,
											avatar_url:patientInCare.avatar_url,
											heart_rate:patientInCare.heart_rate
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
