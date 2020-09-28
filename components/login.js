import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button,TouchableOpacity, ScrollView} from 'react-native';

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
      });
      setFontsLoaded(true);
    }

    if(!fontsLoaded) {
      return(<View/>);
    }
    
    return(
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.profileimage}>
            <Image style={styles.img} source = {require('../src/imgs/logo.png')}/>
          </View>
        <View style={styles.center}>
          <Text>  Correo Electronico</Text>
          <TextInput placeholder="Ingresa tu correo electrónico" style={styles.textbox}/>
          <Text>  Contraseña</Text>
          <TextInput placeholder="Contraseña" secureTextEntry={true} style={styles.textbox}/>
          <View style={styles.btn}>
            <Button title="Ingresar" color='#3491cd' onPress={() => navigation.navigate('Consejo')}>Ingresar</Button>
            <Text style={styles.blacktext}>¿No tienes una cuenta?</Text>
            <Button title="Registrate" color="#3491cd" onPress={() => navigation.navigate('Registro')}>Registrate</Button>
          </View>
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
  }, 
  profileimage: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: '15%',
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
  }
});