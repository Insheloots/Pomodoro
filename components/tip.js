import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image} from 'react-native';

export default function Tip({navigation}){
    return(
      <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
      <View style={styles.profileimage}>
            <Image style={styles.img} source = {require('../assets/images/logo.png')}/>
          </View>
        <View style={styles.top}>
        <Text style={{fontSize: 15, textAlign: 'center', marginVertical:'5%', marginHorizontal:'10%'}}>
        Antes de empezar, debes de tener en cuenta esto:</Text>
        </View>
        <View style={styles.center}>
        <Text style={styles.text}>La Técnica Pomodoro es un método para mejorar la administración del tiempo dedicado a una actividad. Fue desarrollado por Francesco Cirillo a fines de la década de 1980. Se usa un temporizador para dividir el tiempo en intervalos indivisibles, llamados pomodoros, de 25 minutos de actividad, seguidos de 5 minutos de descanso, con pausas más largas cada cuatro pomodoros. 
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('ToDoList')}>
            <View style={styles.btnView}>
              <Text style={styles.buttonText}>Siguiente</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Inicio de Sesion')}>
            <View style={styles.btnView}>
              <Text style={styles.buttonText}>Volver</Text>
            </View>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
      )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: '12%',
    },
    top: {
        flex: 1,
        justifyContent: "center",
    },
    center: {
      flex: 1,
      width: '80%',
      paddingVertical: '4%',
    },
    buttonText: {
      color: 'white',
      fontSize: 14,
      textAlign: 'center',
    },
    btnView:{
      borderRadius: 8,
      paddingVertical: 8,
      marginTop: 16,
      paddingHorizontal: 10,
      backgroundColor: '#3491cd'
    },
    text: {
      paddingBottom: 8,
      fontSize: 14,
    },
    img:{ 
      resizeMode: 'contain',
      width: 220,
      height: 120,
    }
  });