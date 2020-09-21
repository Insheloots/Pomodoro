import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function register({navigation}){
    return(
        <View>
        <Text style={{fontSize: 18, textAlign: 'center', fontStyle: 'normal', fontWeight: 'bold', marginVertical:'7%', marginHorizontal:'10%', color: 'black'}}>
        Para disfrutar de nuestro aplicativo, debes primero registrarte</Text>
        <TextInput placeholder=" Ingresa tu nombre(s)" style={styles.textbox}/>
        <TextInput placeholder=" Ingresa tu apellido(s)" style={styles.textbox}/>
        <TextInput placeholder=" Ingresa tu correo electrónico" style={styles.textbox}/>
        <TextInput placeholder=" Ingresa tu contraseña" secureTextEntry={true} style={styles.textbox}/>
        <View style={styles.btn}>
        <Button style={styles.btn} title="Registrar" color='#3491cd' onPress={() => Alert.alert('Te has registrado correctamente')}/>
        </View>
        <View style={styles.btn}>
        <Button title="Volver" color='#3491cd' onPress={() => navigation.navigate('Inicio de Sesion')}>Volver</Button>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
  blacktext:{
    fontSize: 14,
    marginHorizontal:33,
    textAlign: 'justify',
    fontStyle: 'normal',
    marginTop: 15,
    color: 'black',
  },
  blacktext2:{
    fontSize: 14,
    marginHorizontal:33,
    textAlign: 'justify',
    fontStyle: 'normal',
    marginTop: 2,
    color: 'black',
  },
  textbox:{
    textAlign: 'justify',
    marginHorizontal: '14%',
    marginVertical: '3%',
    borderColor: 'black',
    fontSize: 14,
    borderWidth: 0.2,
    height: 50,
  },
  btn:{
    textAlign: 'center',
    marginTop: '5%',
    marginHorizontal: '9%', 
    width: 294,
  },
});