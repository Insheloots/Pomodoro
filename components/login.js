import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';

export default function login({navigation}){
    return(
        <View style={styles.container}>
          <View style={styles.profileimage}>
            <Image style={styles.img} source = {require('../src/imgs/logo.png')}/>
          </View>
        <View style={styles.center}>
          <TextInput placeholder=" Ingresa tu correo electrónico" style={styles.textbox}/>
          <TextInput placeholder=" Contraseña" secureTextEntry={true} style={styles.textbox}/>
        </View>
        <View style={styles.btn}>
          <Button title="Ingresar" color='#3491cd' onPress={() => navigation.navigate('Consejo')}>Registrate</Button>
          <Text style={styles.blacktext}>¿No tienes una cuenta?</Text>
          <Button title="Registrate" color="#3491cd" onPress={() => navigation.navigate('Registro')}>Registrate</Button>
        </View>
      </View>
    )
}
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  }, 
  profileimage: {
    flex: 1,
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '80%',
  },
  blacktext:{
    fontSize: 14,
    fontStyle: 'normal',
    color: 'black',
    margin: '2%',
  },
  textbox:{
    margin: "2%",
    borderColor: 'black',
    fontSize: 14,
    borderWidth: 0.3,
    borderRadius: 10,
    height: 50,
  },
  btn:{
    flex: 1,
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '80%',
  },
  img:{ 
    resizeMode: 'contain',
    width: 260
  }
});