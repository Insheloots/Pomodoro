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
					<View style={styles.btn}>
						<TouchableOpacity style={styles.btnView} onPress={this.props.pause}>
								<Text style={styles.buttonText}>Pausar</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.btn}>
						<TouchableOpacity style={styles.btnView} onPress={this.props.reset}>
								<Text style={styles.buttonText}>Reiniciar</Text>
						</TouchableOpacity>
					</View>
				</View>
			)
		}
		else
		{
			return(
				<View style={styles.btn}>
                	<TouchableOpacity style={styles.btnView} onPress={this.props.play}>
							<Text style={styles.buttonText}>Iniciar</Text>
                	</TouchableOpacity>
            	</View>
			)
		}
	}
}



const styles=StyleSheet.create({
	container:{
        flexDirection: "row",
        justifyContent: "center",
	},
	btn: {
		marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        color: "white",
        fontFamily: 'regularM',
        fontSize: 14,
        textAlign: "center",
    },
    btnView: {
        borderRadius: 25,
        paddingVertical: 8,
        marginTop: 15,
        paddingHorizontal: 60,
        backgroundColor: "#1f65ff",
    },
})

export default TimerButtons