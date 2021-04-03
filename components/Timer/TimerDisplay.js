import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TimerDisplay extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.textStyle}> 
					{Math.floor(this.props.time/60).toString().padStart(2,"0",) + ":" + 
					(this.props.time % 60).toString().padStart(2,"0")}
				</Text>
			</View>
		)
	}
}

export default TimerDisplay;

const styles = StyleSheet.create({
	container: {
		flex: 1,
        marginTop: 30,
        flexDirection: "column",
        justifyContent: "center",
		marginVertical: "10%",
		marginHorizontal: "25%",
		alignItems: 'center',
		width: "50%",
		padding: 30,
	    borderRadius: 8,
		backgroundColor: "#3491cd",
	},
	textStyle: {
		color: "white",
	    fontSize: 30,
		fontWeight: "400",
	}
})