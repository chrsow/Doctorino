import React from 'react';
import {View, ScrollView,Text, Image, StyleSheet, List, ListItem} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Icon} from 'react-native-elements';
import {SmoothLine, Bar} from 'react-native-pathjs-charts';

// import PatientDetailTab from './PatientDetailTab';
import PatientDetailSleep from './patientdetail/PatientDetailSleep';
import PatientDetailHeart from './patientdetail/PatientDetailHeart';

const GraphSleep = ()=>{
	let data = [
    [{
      "v": 8,
      "name": "20/8/2017"
    }, {
      "v": 7,
      "name": "21/8/2017"
    }, {
      "v": 8,
      "name": "22/8/2017"
    }, {
      "v": 6,
      "name": "23/8/2017"
    }, {
      "v": 8,
      "name": "24/8/2017"
    }, {
      "v": 7,
      "name": "25/8/2017"
    }]
  ]

  let options = {
    width: 300,
    height: 200,
    margin: {
      top: 20,
      left: 25,
      bottom: 50,
      right: 20
    },
    color: '#2980B9',
    gutter: 20,
    animate: {
      // // type: 'oneByOne',
      // duration: 200,
      // fillTransition: 3
    },
    axisX: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'bottom',
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    },
    axisY: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'left',
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    }
  }

  return (
    <View>
      <Bar data={data} options={options} accessorKey='v'/>
    </View>
  )
}

export default class PatientDetail extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			// patientDetailList:[
			// 	{
			// 		topic: 'Sleep',
			// 		img_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
			// 		navigate: 'PatientDetailSleep'
			// 		// subtitle: 'Vice President'
			// 	},
			// 	{
			// 		topic: 'Heart Rate',
			// 		img_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
			// 		navigate: 'PatientDetailHeart'
			// 		// subtitle: 'Vice Chairman'
			// 	}
			// ]
			patientDetail:[

			]
		};
	}
	static navigationOptions = { 
		title: 'Patient Detail'
	};

	render(){
		const {navigation: {state: {params}}} = this.props;
		const {navigate} = this.props.navigation;
		
	
		return(
			<View style={styles.container}>
				<ScrollView 
					contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
					<View style={styles.body}>
						<Image source={{uri:params.avatar_url}}
							style={styles.image}/>
						<Text style={styles.name}>{params.first_name} {params.last_name}</Text>
					</View>
					<Text style={styles.info}>Age: 55</Text>
					{/* <Text style={styles.info}>Disease: Heart Disease</Text>
					<Text style={styles.info}>Admited Date: 20 Aug 2017</Text>
					<Text style={styles.topic}>Sleep rate</Text> */}
					<GraphSleep/>
					{/* <Text style={styles.topic}>Heart rate</Text> */}
					{/* <Icon size={24} name="heart"/> */}
					<Text>111 BPM</Text>
					{/* <SmoothLine data={data} options={options} xKey='x' yKey='y' /> */}
					{/* <SmoothLine data={data} options={options} xKey='x' yKey='y' /> */}
					{/* <PatientDetailTab/> */}

					{/* <List containerStyle={{marginBottom: 20}}>
						{
							this.state.patientDetailList.map((l, i) => (
								<ListItem
									roundAvatar
									avatar={{uri:l.img_url}}
									key={i}
									title={l.topic}
									onPress={()=>{
											navigate(params.navigate,{
												topic:l.topic,
												img_url:l.img_url
											})
										}
									}
								/>
							))
						}
					</List> */}
					
				</ScrollView>
			</View>
		);
	}
}

// const PatientDetailStack = StackNavigator({
// 	PatientDetail:{screen:PatientDetail},
// 	PatientDetailSleep:{screen:PatientDetailSleep},
// 	PatientDetailHeart:{screen:PatientDetailHeart}
// });

// export default PatientDetailStack;

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: 'center',
		backgroundColor: '#fff',
		width:'100%',
		height:'100%',
	},
	body:{
		flex:1,
		alignItems: 'center',
	},
	image:{
		width:70,
		height:70,
		borderRadius: 35,
		marginTop: 30,
		marginBottom: 10
	},
	name:{
		fontSize: 20
	},
	info:{

	},
	topic:{
		fontWeight: 'bold',
		fontSize: 15,
		marginTop: 15,
		alignItems: 'center'
	}
});