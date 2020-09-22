import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class TimerHeader extends React.Component {

	// handles the display of timer header
	handleDisplay = () => {
		if(this.props.intervalType === "Trabajando")
		{
			if(this.props.running === true) {
				return(
					<Text style={{fontSize: 15}}>El tiempo ha iniciado, mantente concentrado durante los 5 minutos, te notificaremos cuando ya hayas terminado.</Text>
				)
			}
			else {
				return (
					<Text>¿Quieres empezar? Dale en el botón de iniciar</Text>
				)
			}	
		}
		else {
			if(this.props.running === true) {
				return(
					<Text>Es tiempo de descansar, disfruta de tus 5 minutos de relajación.</Text>
				)
			}
			else {
				return(
					<Text>Relajate.</Text>
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
	fontSize: 19,
	marginHorizontal:'9%',
	textAlign: 'center',
	fontWeight: 'bold',
	fontStyle: 'normal',
	marginTop: '12%',
	color: 'black',
  }
});

export default TimerHeader;