import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}> 
					{Math.floor(this.props.time/60).toString().padStart(2,"0") + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
				</Text>
			</View>
		)
	}
}

export default TimerDisplay;

const styles = StyleSheet.create({
	container: {
		marginVertical: "7%",
		marginBottom: "10%",
		marginHorizontal: '31%',
	    padding: "3%",
	    borderColor: "#3491cd",
	    borderRadius: 15,
	    borderWidth: 4,
		alignItems: 'center',
		backgroundColor: "#8ec1e3",
		width: "40%",
	},
	textStyle: {
		color: "white",
	    fontSize: 30,
	    fontWeight: "400",
	}
})