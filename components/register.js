import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function register({navigation}){
    return(
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={{fontSize: 18, textAlign: 'center', fontStyle: 'normal', fontWeight: 'bold', marginVertical:'7%', marginHorizontal:'10%', color: 'black'}}>
              Para disfrutar de nuestro aplicativo, debes primero registrarte</Text>
          </View>
          <View style={styles.center}>
            <Text> Nombre</Text>
            <TextInput placeholder="Ingresa tu nombre(s)" style={styles.textbox}/>
            <Text> Apellidos</Text>
            <TextInput placeholder="Ingresa tu apellido(s)" style={styles.textbox}/>
            <Text> Correo electronico</Text>
            <TextInput placeholder="Ingresa tu correo electrónico" style={styles.textbox}/>
            <Text> Contraseña</Text>
            <TextInput placeholder="Ingresa tu contraseña" secureTextEntry={true} style={styles.textbox}/>
          </View>
        <View style={styles.bottom}>
          <Button title="Registrar" onPress={() => Alert.alert('Te has registrado correctamente')}/>
        </View>
        <View style={styles.btn}>
          <Button style={styles.btn} title="Volver" onPress={() => navigation.navigate('Inicio de Sesion')}>Volver</Button>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  top: {
    flex: 1,
    justifyContent: "center",
  },
  center: {
    flexDirection: "column",
    width: "80%",
  },
  bottom: {
    flex: 1,
    margin: "auto",
    flexDirection: "column",
    justifyContent: "center",
    width: "75%",
  },  
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
    marginVertical: '3%',
    borderColor: 'black',
    fontSize: 14,
    borderRadius: 13,
    borderWidth: 0.4,
    paddingHorizontal: 16,
    height: 50,
  },
  btn: {
    flex: 1,
    width: "75%",
  },
});