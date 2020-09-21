import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerHeader extends React.Component {

	// handles the display of timer header
	handleDisplay = () => {
		if(this.props.intervalType === "Trabajando")
		{
			if(this.props.running === true) {
				return "El tiempo ha iniciado, mantente concentrado durante los 5 minutos, te notificaremos cuando ya hayas terminado."
			}
			else {
				return "¿Quieres empezar? Dale en el botón de iniciar."
			}	
		}
		else {
			if(this.props.running === true) {
				return "Es tiempo de descansar, disfruta de tus 5 minutos de relajación."
			}
			else {
				return "Relajate."
			}	
		}

	}
	render() {
	
		let texttoshow = this.handleDisplay()
		return(
			<Text style={styles.textStyle}>{texttoshow}</Text>
		)				
	}
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 1.5,
    marginTop: 40,
    padding: 20
  }
});

export default TimerHeader;