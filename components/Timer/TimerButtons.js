import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

class TimerButtons extends React.Component {
	state = {};

	//renders pause, play and reset buttons
	render() {
		if(this.props.running === true)
		{
			return (
				<View style={styles.container}>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.pause}>
						<Text style={styles.buttonText}>PAUSAR</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.reset}>
						<Text style={styles.buttonText}>REINICIAR</Text>
					</TouchableOpacity>
				</View>
			)
		}
		else
		{
			return(
				<View  style={styles.container}>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.play}>
						<Text style={styles.buttonText}>INICIAR</Text>
					</TouchableOpacity>
				</View>
			)
		}
	}
}



const styles=StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: "row" ,
		marginLeft: 20, 
		justifyContent: 'space-evenly',
		marginBottom: 20
	},
	buttonStyle:{
		alignItems: "center",
		backgroundColor: '#8ec1e3',
		padding: 15,
		marginVertical: "-6%",
		borderColor: '#3491cd',
		borderRadius: 15,
	    flexDirection: "row" ,
	}, 
	 buttonText: {
	    color: "white",
		fontSize: 14,
	    fontWeight: "300",
  	}
})

export default TimerButtons