import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';

export default function login({navigation}){
    return(
        <View>
        <Image style={styles.img} source = {require('../src/imgs/logo.png')}/>
        <TextInput placeholder=" Ingresa tu correo electrónico" style={styles.textbox}/>
        <TextInput placeholder=" Contraseña" secureTextEntry={true} style={styles.textbox}/>
        <View style={styles.btn}>
        <Button title="Ingresar" color='#3491cd' onPress={() => navigation.navigate('Consejo')}>Registrate</Button>
        </View>
        <Text style={styles.blacktext}>¿No tienes una cuenta?</Text>
        <View style={styles.btn}>
        <Button title="Registrate" color="#3491cd" onPress={() => navigation.navigate('Registro')}>Registrate</Button>
        </View>
      </View>
    )
}
      
const styles = StyleSheet.create({
  blacktext:{
    fontSize: 14,
    textAlign: 'center',
    fontStyle: 'normal',
    marginTop: '10%',
    marginBottom: '-5%',
    color: 'black',
  },
  textbox:{
    textAlign: 'justify',
    marginHorizontal: '14%',
    marginVertical: '4%',
    borderColor: 'black',
    fontSize: 14,
    borderWidth: 0.3,
    height: 50,
  },
  btn:{
    textAlign: 'center',
    marginTop: '10%',
    marginHorizontal: '9%', 
    width: 294,
  },
  img:{
    marginTop: '5%',
    marginBottom: '10%',
    marginHorizontal: '14%', 
    resizeMode: 'contain',
    width: 260
  }
});