import React from 'react';
import {View, Text} from 'react-native';
import { List, ListItem, CheckBox} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchPatient from './SearchPatient';
import PatientDetail from './PatientDetail';

class Patient extends React.Component{
	static navigationOptions = { header: null };

	constructor(props){
		super(props);
		this.state = {
			patientList: []
		}
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
								avatar={{uri:l.avatar_url}}
								key={i}
								title={l.name}
								onPress={()=>{
										navigate('PatientDetail',{
											name:l.name,
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
		filteredPatients: state.filteredPatients
	}
}

export default connect(mapStateToProps)(PatientStack);