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
        marginTop: 30,
        flexDirection: "column",
        justifyContent: "center",
		paddingTop: "30%",
		paddingBottom: "30%",
		marginHorizontal: "15%",
		alignItems: 'center',
	},
	textStyle: {
	    fontSize: 80,
		fontFamily: "regularM",
	}
})