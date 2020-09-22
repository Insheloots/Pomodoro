import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function Tip({navigation}){
    return(
    <View>
        <Text style={{fontSize: 20, textAlign: 'center', fontStyle: 'normal', fontWeight: 'bold', marginTop: '16%', marginBottom:'7%', marginHorizontal:'10%', color: 'black'}}>
        Antes de empezar, debes de tener en cuenta esto:</Text>
        <Text style={styles.blacktext}>La Técnica Pomodoro es un método para mejorar la administración del tiempo dedicado a una actividad. Fue desarrollado por Francesco Cirillo a fines de la década de 1980. Se usa un temporizador para dividir el tiempo en intervalos indivisibles, llamados pomodoros, de 25 minutos de actividad, seguidos de 5 minutos de descanso, con pausas más largas cada cuatro pomodoros. 
        </Text>
        <View style={styles.btn}>
        <Button title="Siguiente" color='#3491cd' onPress={() => navigation.navigate('Temporizador Pomodoro')}>Siguiente</Button>
        </View>
        <View style={styles.btn}>
        <Button title="Volver" color='#8ec1e3' onPress={() => navigation.navigate('Inicio de Sesion')}>Volver</Button>
        </View>
        </View>
      )
}

const styles = StyleSheet.create({
    blacktext:{
        fontSize: 15,
        marginHorizontal:'9%',
        textAlign: 'justify',
        fontStyle: 'normal',
        marginTop: '4%',
        color: 'black',
      },
    btn:{
        textAlign: 'center',
        marginTop: '7%',
        marginHorizontal: '9%', 
        width: 294,
    },
  });