import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert, ScrollView } from 'react-native';

export default function register({navigation}){
    return(
      <ScrollView>
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

            {/* Botones */}
            <View style={styles.btn}>
              <Button title="Registrar" onPress={() => Alert.alert('Te has registrado correctamente')}/>
              <Button title="Volver" onPress={() => navigation.navigate('Inicio de Sesion')}>Volver</Button>
            </View>

          </View>
      </View>
    </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: '7%',
  },
  top: {
    flex: 1,
    justifyContent: "center",
  },
  center: {
    flex: 1,
    flexDirection: "column",
    width: "80%",
    paddingVertical: '10%',
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
    borderRadius: 10,
    borderWidth: 0.4,
    paddingHorizontal: 16,
    height: 50,
  },
  btn: {
    paddingVertical: '5%',
    marginVertical: '5%',
  },
});