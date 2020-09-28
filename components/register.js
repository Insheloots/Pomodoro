import React from 'react';
import { Text, View, StyleSheet, TextInput, Alert, ScrollView, TouchableOpacity } from 'react-native';

export default function register({navigation}){
  return(
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={{fontSize: 15, textAlign: 'center', fontFamily: 'montserrat-bold', marginVertical:'5%', marginHorizontal:'10%'}}>
            Para disfrutar de nuestro aplicativo, debes primero registrarte</Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.text}> Nombre</Text>
          <TextInput placeholder="Ingresa tu nombre(s)" style={styles.textbox}/>
          <Text style={styles.text}> Apellidos</Text>
          <TextInput placeholder="Ingresa tu apellido(s)" style={styles.textbox}/>
          <Text style={styles.text}> Correo electrónico</Text>
          <TextInput placeholder="Ingresa tu correo electrónico" style={styles.textbox}/>
          <Text style={styles.text}> Contraseña</Text>
          <TextInput placeholder="Ingresa tu contraseña" secureTextEntry={true} style={styles.textbox}/>

          {/* Botones */}
          <TouchableOpacity onPress={() => Alert.alert('Te has registrado correctamente')}>
            <View style={styles.btnView}>
              <Text style={styles.buttonText}>Registrar</Text>
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
  paddingVertical: '2%',
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
textbox:{
  marginVertical: '3%',
  borderColor: 'black',
  fontFamily: 'montserrat-light',
  fontSize: 13,
  borderRadius: 10,
  borderWidth: 0.4,
  paddingHorizontal: 16,
  height: 50,
},
btn: {
  paddingVertical: '5%',
  marginVertical: '5%',
},
buttonText: {
  color: 'white',
  fontFamily: 'montserrat-light',
  fontSize: 14,
  textAlign: 'center',
},
btnView:{
  borderRadius: 8,
  paddingVertical: 10,
  marginTop: 15,
  paddingHorizontal: 10,
  backgroundColor: '#3491cd'
},
text: {
  fontFamily: 'montserrat-light',
  fontSize: 14,
}
});