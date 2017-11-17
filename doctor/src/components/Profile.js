import React from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';
import {Divider} from 'react-native-elements';

// const list = [
// 	{
// 		title:
// 	}
// ]

export default class Profile extends React.Component{
	// static navigationOptions = {
	// 	header: null
	// };

	render(){
		return(
			<View style={styles.container}>
				{/* <Image source={{uri:'https://static.comicvine.com/uploads/scale_small/11/113509/5180123-5280792940-latest'}}					style={styles.image}/> */}
				<Image source={require('../assets/img/Boss.jpg')}
					style={styles.image}/>
				<Text style={styles.name}>Dr. Varitthorn Sutthisopa-arporn</Text>
				<Divider style={styles.divider} />
				<Text style={styles.info}> Doctor ID: 844be0057b3db7e8</Text>
				<Text style={styles.info}> Doctor Type: Heart doctor</Text>
				<Text style={styles.info}> Department: Heart center</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		backgroundColor: '#fff',
		width:'100%',
		height:'100%',
	},
	image:{
		width:80,
		height:80,
		borderRadius: 40,
		marginTop: 30,
		marginBottom: 15
	},
	name:{
		fontSize: 20
	},
	info:{
		fontSize: 15
	},
	divider:{ 
		backgroundColor: '#e1e8ee',
		marginTop: 10,
		marginBottom: 5,
		height:2,
		width:200
	}
});