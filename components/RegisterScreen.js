import {Text, View, StyleSheet, Alert, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, {Component} from 'react'
import * as firebase from 'firebase'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

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
            if(email === ''){
              Alert.alert('Debes de digitar un correo.')
              }
              if(password === ''){
              Alert.alert('Debes de digitar una contraseña.')
              }
              if(password.length<5){
                Alert.alert('La contraseña debe de tener minimo 5 carácteres')
              }
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
                <View style={styles.login}>
                  <Text style={styles.textLogin}>Registrarte</Text>
                </View>
                </TouchableOpacity>
            </View>
        }
        onFocus(value){
          this.setState({
            borderColor: value
          });
        }
        render(){
            return(
              
                <View style={styles.container}>
                    <Text style={styles.title}>Registrarte</Text>
                    <Text style={styles.text}>Es rápido y fácil.</Text>
                  <View style={styles.action}>
                    <View  style={[styles.section,{borderColor:this.state.borderColor=="email" ? '#3465d9' : 'gray'}]}>
                      <MaterialIcons name="email" size={20}
                        color={this.state.borderColor=="email" ? '#3465d9' : 'gray'} />
                      <TextInput value= {this.state.email} onChangeText={email => this.setState({email})} placeholder="Correo electrónico" 
                      style={[styles.textInput, {color:this.state.borderColor=="email" ? '#3465d9' : 'gray'}]} 
                      onFocus={()=>this.onFocus("email")}/>
                    </View>
                  </View>
                  <View style={styles.action}>
                    <View  style={[styles.section,{borderColor:this.state.borderColor=="password" ? '#3465d9' : 'gray'}]}>
                      <MaterialIcons name="lock-outline" size={20} 
                        color={this.state.borderColor=="password" ? '#3465d9' : 'gray'}/>
                      <TextInput value= {this.state.password} onChangeText={password => this.setState({password})} placeholder="Contraseña" secureTextEntry={true} 
                      style={[styles.textInput, {color:this.state.borderColor=="password" ? '#3465d9' : 'gray'}]} 
                      onFocus={()=>this.onFocus("password")}/>
                    </View>
                  </View>
                    
                  {this.renderButtonOrLoading()}
                  <View style={styles.signup}>
                  <Text style={[styles.textSignup, {color: 'gray'}]}>¿Ya tienes una cuenta?</Text>
                    <TouchableOpacity onPress={this.onBackPress.bind(this)}>
                      
                      <Text style={[styles.textSignup, {color: '#3465d9', marginLeft: 3}]}>Inicia sesión</Text>
                      
                    </TouchableOpacity>
                  </View>
                    
                </View>
                
              
            )

        }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100
  }, 
  
  img:{ 
    resizeMode: 'contain',
    width: 220,
    height: 120,
  },
  text: {
    color: 'grey',
    fontSize: 14,
  },
  title: {
    color: '#3465d9',
    fontWeight: 'bold',
    fontSize: 30
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,

  },
  textLogin: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  login: {
    width: '100%',
    height: 40,
    backgroundColor: '#3465d9',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 50
  },
  signup: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  textSignup: {
    textAlign: 'center',
  },
      
});