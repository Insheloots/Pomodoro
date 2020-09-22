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
		marginTop: "7%",
		marginBottom: "10%",
		marginHorizontal: '18%',
	    padding: "10%",
	    borderColor: "white",
	    borderRadius: 80,
	    borderWidth: 4,
		alignItems: 'center',
		backgroundColor: "#3491cd",
		width: "66%",
		height: "10%",
	},
	textStyle: {
		marginTop: '-14%',
		color: "white",
	    fontSize: 30,
	    fontWeight: "400",
	}
})