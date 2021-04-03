import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class TimerButtons extends React.Component {
	state = {};

	//renders pause, play and reset buttons
	render() {
		if(this.props.running === true)
		{
			return (
				<View style={styles.container}>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.pause}>
						<Text style={styles.buttonText}>Pausar</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.reset}>
						<Text style={styles.buttonText}>Reiniciar</Text>
					</TouchableOpacity>
				</View>
			)
		}
		else
		{
			return(
				<View  style={styles.container}>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.props.play}>
						<Text style={styles.buttonText}>Iniciar</Text>
					</TouchableOpacity>
				</View>
			)
		}
	}
}



const styles=StyleSheet.create({
	container:{
		flex: 1,
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
		paddingHorizontal: 80,
		width: "100%",
	},
	buttonStyle:{
		flex: 1,
        flexDirection: "row",
        justifyContent: "center",
		alignItems: "center",
		backgroundColor: '#3491cd',
		padding: 20,
		width: "50%",
		borderColor: '#3491cd',
		borderRadius: 8,
		marginHorizontal: 10,
	}, 
	 buttonText: {
		color: "white",
		fontSize: 14,
	    fontWeight: "300",
  	}
})

export default TimerButtons