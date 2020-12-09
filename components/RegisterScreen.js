import {Text, View, StyleSheet, Image, Alert, TextInput, TouchableOpacity, Button, ScrollView} from 'react-native'
import React, {Component} from 'react'
import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyChe_Kq-FqKXY3ylU8uafoYr5VIzL9wv1A",
    authDomain: "pomodoro-time-b4d8d.firebaseapp.com",
    projectId: "pomodoro-time-b4d8d",
    storageBucket: "pomodoro-time-b4d8d.appspot.com",
    messagingSenderId: "510640349059",
    appId: "1:510640349059:web:b18193ac3a84a96802e0b6",
    measurementId: "G-GKER2EPPBW"
  };

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default class login extends React.Component{
    constructor(props){
        super(props);
        this.state = {email:'', password:'', error:'', loading:false};
    }
    onSignUpPress(){
        this.setState({error:'', loading:true});
        const{email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() =>{
            this.setState({error:'',loading:false});
            this.props.navigation.navigate('Inicio de Sesion');
        })
        .catch(() => {
            this.setState({error:'Autenticación fallida', loading:false});
        })
        }
        onBackPress(){
          this.props.navigation.navigate('Inicio de Sesion');
    }
        renderButtonOrLoading(){
            if(this.state.loading){
                return <Text> Cargando </Text>
            }
            return <View>
                <TouchableOpacity onPress={this.onSignUpPress.bind(this)}>
                <View style={styles.btnView}>
                  <Text style={styles.buttonText}>Registrar</Text>
                </View>
                </TouchableOpacity>
            </View>
        }
        
        render(){
            return(
              <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>
                  <View style={styles.top}>
                    <Text style={{ fontSize: 15, textAlign: 'center', marginVertical: '12%', marginHorizontal: '10%' }}>
                      Para disfrutar de nuestro aplicativo, debes primero registrarte</Text>
                  </View>
                  <View style={styles.center}>
                    <Text style={styles.text}> Nombres</Text>
                    <TextInput placeholder="Ingresa tu nombre(s)" style={styles.textbox} />
                    <Text style={styles.text}> Apellidos</Text>
                    <TextInput placeholder="Ingresa tu apellido(s)" style={styles.textbox} />
                    <Text style={styles.text}> Correo electrónico</Text>
                    <TextInput value= {this.state.email} onChangeText={email => this.setState({email})} placeholder="Ingresa tu correo electrónico" style={styles.textbox}/>
                    <Text style={styles.text}>  Contraseña</Text>
                    <TextInput value= {this.state.password} onChangeText={password => this.setState({password})} placeholder="Contraseña" secureTextEntry={true} style={styles.textbox}/>
                    {this.renderButtonOrLoading()}
                    <TouchableOpacity onPress={this.onBackPress.bind(this)}>
                      <View style={styles.btnView}>
                        <Text style={styles.buttonText}>Volver</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            )

        }
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
        paddingVertical: '14%',
      },
      center: {
        flex: 1,
        width: '80%',
        paddingVertical: '2%',
      },
      blacktext:{
        fontSize: 14,
        fontStyle: 'normal',
        color: 'black',
        marginTop: '8%',
        marginBottom: '2%',
      },
      textbox:{
        margin: "2%",
        borderColor: 'black',
        fontSize: 13,
        borderWidth: 0.3,
        borderRadius: 10,
        height: 50,
        paddingHorizontal: 16,
      },
      btn: {
        flex: 1,
        marginVertical: '20%',
      },
      img:{ 
        resizeMode: 'contain',
        width: 220,
        height: 120,
      },
      buttonText: {
        color: 'white',
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
        fontSize: 14,
    }
});