import React from 'react';
import { Platform, StyleSheet, Text} from 'react-native';

class TimerHeader extends React.Component {

	// handles the display of timer header
	handleDisplay = () => {
		if(this.props.intervalType === "Trabajando")
		{
			if(this.props.running === true) {
				return(
					<Text style={styles.fontsize}>El temporizador Pomodoro ha iniciado</Text>
				)
			}
			else {
				return (
					<Text style={styles.fontsize}>Dale al botón "Iniciar"</Text>
				)
			}	
		}
		else {
			if(this.props.running === true) {
				return(
					<Text style={styles.fontsize}>Descansa en estos 5 minutos</Text>
					
				)
			}
			else {
				return(
					<Text style={styles.fontsize}>Tiempo de descanso</Text>
				)
			}	
		}

	}
	render() {
	
		let texttoshow = this.handleDisplay()
		return(
			<Text style={styles.blacktext}>{texttoshow}</Text>
		)				
	}
}

const styles = StyleSheet.create({
  blacktext:{
	marginHorizontal:'9%',
	textAlign: 'center',
	fontStyle: 'normal',
	marginTop: '15%',
	color: 'black',
  },
  fontsize:{
	  fontSize: 17,
  }
});

export default TimerHeader;