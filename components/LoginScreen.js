import {Text, View, StyleSheet, Image, TextInput, Alert, TouchableOpacity, ScrollView} from 'react-native'
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
    onLoginPress(){
        this.setState({error:'', loading:true});
        const{email, password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() =>{
            this.setState({error:'',loading:false});
            this.props.navigation.navigate('ToDoList');
        })
        .catch(() => {
            this.setState({error:'Autenticación fallida', loading:false});
              Alert.alert('El correo o la contraseña que ingreso no estan correctos.')
            if(email === ''){
              Alert.alert('Debes de digitar un correo.')
            }
            if(password === ''){
              Alert.alert('Debes de digitar una contraseña.')
            }
        })
    }
        onRegisterPress(){
              this.props.navigation.navigate('Registro');
        }

        renderButtonOrLoading(){
            if(this.state.loading){
                return <Text> Cargando </Text>
            }
            return <View>
                <TouchableOpacity style={styles.login} onPress={this.onLoginPress.bind(this)}>
                  <Text style={styles.textLogin}>Iniciar sesión</Text>
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
                      
                    
                    <Text style={styles.title}>Inicio sesión</Text>
                    <Text style={styles.text}>Pomodoro time te ayudara a gestionar tu tiempo.</Text>
                      
                    <View style={styles.action}>
                      <View style={[styles.section,{borderColor:this.state.borderColor=="email" ? '#3465d9' : 'gray'}]}>

                        <MaterialIcons name="email" size={20}
                        color={this.state.borderColor=="email" ? '#3465d9' : 'gray'} />

                        <TextInput style={[styles.textInput,{color:this.state.borderColor=="email" ? '#3465d9' : 'gray'}]} value= {this.state.email} onChangeText={email => this.setState({email})}
                          placeholder="Correo electrónico" 
                          onFocus={()=>this.onFocus("email")}
                        />
                      </View>
                      
                      <View style={[styles.section,{borderColor:this.state.borderColor=="password" ? '#3465d9' : 'gray'}]}>
                        <MaterialIcons name="lock-outline" size={20} 
                        color={this.state.borderColor=="password" ? '#3465d9' : 'gray'}/>
                        <TextInput value= {this.state.password} onChangeText={password => this.setState({password})} 
                        placeholder="Contraseña" secureTextEntry
                        onFocus={()=>this.onFocus("password")} 
                        style={[styles.textInput, {color:this.state.borderColor=="password" ? '#3465d9' : 'gray'}]}/>
                      </View>
                    </View>

                    {this.renderButtonOrLoading()}
                    

                    <View style={styles.signup}>
                      <Text style={[styles.textSingup, {color: 'gray'}]}>¿No tienes una cuenta?</Text>
                      <TouchableOpacity onPress={this.onRegisterPress.bind(this)}>
                        <Text style={[styles.textSingup, {color: '#3465d9', marginLeft: 3}]}>Registrate</Text>
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
      textSingup: {
        textAlign: 'center',
      },
});