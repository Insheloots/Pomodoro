import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native';

import * as Font from 'expo-font';

export default function login({navigation}){
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
      if(!fontsLoaded) {
        loadFonts();
      }
    });

    const loadFonts = async () => {
      await Font.loadAsync({
        'montserrat-light': require('../assets/fonts/Montserrat-Light.ttf'),
        'montserrat-bold':require('../assets/fonts/Montserrat-Bold.ttf'),
      });
      setFontsLoaded(true);
    }

    if(!fontsLoaded) {
      return(<View/>);
    }
    
    return(
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <View style={styles.profileimage}>
            <Image style={styles.img} source = {require('../src/imgs/logo.png')}/>
          </View>
        <View style={styles.center}>
          <Text style={styles.text}>  Correo Electronico</Text>
          <TextInput placeholder="Ingresa tu correo electrónico" style={styles.textbox}/>
          <Text style={styles.text}>  Contraseña</Text>
          <TextInput placeholder="Contraseña" secureTextEntry={true} style={styles.textbox}/>
          <TouchableOpacity onPress={() => navigation.navigate('Consejo')}>
            <View style={styles.btnView}>
              <Text style={styles.buttonText}>Ingresar</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.blacktext}>¿No tienes una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <View style={styles.btnView}>
              <Text style={styles.buttonText}>Registrate</Text>
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
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  }, 
  profileimage: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: '6%',
  },
  center: {
    flex: 1,
    width: '80%',
    paddingVertical: '5%',
  },
  blacktext:{
    fontSize: 14,
    fontStyle: 'normal',
    color: 'black',
    fontFamily: 'montserrat-light',
    marginTop: '8%',
    marginBottom: '2%',
  },
  textbox:{
    margin: "2%",
    borderColor: 'black',
    fontSize: 14,
    borderWidth: 0.3,
    borderRadius: 10,
    height: 50,
    fontFamily: 'montserrat-light',
    paddingHorizontal: 16,
  },
  btn: {
    flex: 1,
    marginVertical: '20%',
  },
  img:{ 
    resizeMode: 'contain',
    width: 260,
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

