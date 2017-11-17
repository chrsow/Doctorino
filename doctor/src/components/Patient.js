import React from 'react';
import {View, Text} from 'react-native';
import { List, ListItem, CheckBox} from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

import SearchPatient from './SearchPatient';
import PatientDetail from './PatientDetail';

class Patient extends React.Component{
	static navigationOptions = { header: null };

	constructor(props){
		super(props);
		this.state = {
			patientsList:[
				{
					name: 'Amy Farha',
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
					subtitle: 'Vice President'
				},
				{
					name: 'Chris Jackson',
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
					subtitle: 'Vice Chairman'
				}
			]
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
						this.state.patientsList.map((l, i) => (
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

export default PatientStack;