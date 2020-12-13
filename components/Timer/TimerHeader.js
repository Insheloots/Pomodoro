import React from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

export default class TimerHeader extends React.Component {
	handleDisplay = () => {
		if(this.props.intervalType === "Trabajando")
		{
			if(this.props.running === true) {
				return(
					<Text style={{fontSize: 17}}>El tiempo ha iniciado, mantente concentrado durante los 5 minutos, te notificaremos cuando ya hayas terminado.</Text>
				)
			}
			else {
				return (
					<Text style={{fontSize: 17}}>¿Quieres empezar? Dale en el botón de iniciar</Text>
				)
			}	
		}
		else {
			if(this.props.running === true) {
				return(
					<Text style={{fontSize: 17}}>Es tiempo de descansar, disfruta de tus 5 minutos de relajación.</Text>
					
				)
			}
			else {
				return(
					<Text style={{fontSize: 17}}>Relajate.</Text>
				)
			}	
		}

	}

	render() {
	
		let texttoshow = this.handleDisplay()

		return(
			<ScrollView>
				<Text style={styles.blacktext}>{texttoshow}</Text>
			</ScrollView>
		)				
	}
}

const styles = StyleSheet.create({
  blacktext:{
	marginHorizontal:'9%',
	marginVertical: '1%',
	textAlign: 'center',
	fontStyle: 'normal',
	marginTop: '55%',
	color: 'black',
  },
  container2: {
	flex: 1,
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
  },
  buttonContainer: {
	flex: 1,
	marginHorizontal: '15%',
  }
});