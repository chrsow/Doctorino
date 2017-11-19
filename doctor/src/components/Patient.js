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
					last_name: patientInCareList[patient].last_name
				});
			}
			this.setState({patientList: newPatientList});
		});

		const HeartRate = firebase.database().ref('patients/1/heartrate');
		HeartRate.on('value',snapshot=>{
			let heartrate = snapshot.val();
			if(parseInt(heartrate)>100){
				Alert.alert(
					'Warning',
					'His heart rate is ' + heartrate,
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
						this.state.patientList.map((l, i) => (
							<ListItem
								roundAvatar
								avatar={{uri:l.avatar_url	}}
								key={i}
								title={`${l.first_name} ${l.last_name}`}
								onPress={()=>{
										navigate('PatientDetail',{
											first_name:l.first_name,
											last_name:l.last_name,
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
