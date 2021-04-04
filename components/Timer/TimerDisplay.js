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
		paddingTop: "30%",
		paddingBottom: "30%",
		marginHorizontal: "15%",
		alignItems: 'center',
		width: "70%",
		backgroundColor: "#f2f2f2",
	},
	background:{
		backgroundColor: "white",
	},
	textStyle: {
		color: "black",
	    fontSize: 80,
		fontWeight: "600",
	}
})