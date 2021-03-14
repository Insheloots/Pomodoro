import {Text, View, StyleSheet, TextInput, Alert, TouchableOpacity} from 'react-native'
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
            this.props.navigation.navigate('MainHome');
        })
        .catch(() => {
            this.setState({error:'Autenticación fallida', loading:false});
            if(email === '' && password === ''){
              Alert.alert(
                '⚠️ Campos vacios',
                'Ingrese correo electrónico y contraseña.',
                [
                  {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
            }
            else if(email === ''){
              Alert.alert(
                '⚠️ Correo electrónico',
                'El correo electrónico que ingresaste no coincide con ninguna cuenta.',
                [
                  {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
            }
            else if(password === ''){
              Alert.alert(
                '⚠️ Contraseña',
                'La contraseña que ingresaste no coincide con ninguna cuenta.',
                [
                  {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
            }
            else{
            Alert.alert(
              '⚠️ Datos invalidos',
              'Los datos que ingresaste no coinciden con ninguna cuenta.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )
            }
        })
    }
        onRegisterPress(){
          Alert.alert('Términos y Condiciones', 'Ley 1581 de 2012:\n\nLa Ley 1581 de 2012 desarrolla el derecho constitucional a conocer, actualizar y rectificar la información recogida en bases de datos, además de ciertas libertades y garantías referidas en los artículos 15 y 20 de la Constitución de Colombia. \n\nLa citada ley se aplica a los datos personales registrados en cualquier base de datos que los haga susceptibles de tratamiento por parte de las diferentes entidades. \n\nSiendo asi que como titular de los datos personales tiene derecho a: \n\nA) Conocer, actualizar y rectificar sus datos personales frente a los responsables o encargados del tratamiento. \n\nB) Solicitar prueba de la autorización otorgada al responsable del tratamiento, salvo cuando expresamente se exceptúe como requisito para el tratamiento, de conformidad con lo previsto en el artículo 10 de la citada ley. \n\nC) Ser informado por el responsable del tratamiento o el encargado del tratamiento con previa solicitud, respecto al uso que le ha dado a sus datos personales. \n\nD) Presentar ante la Superintendencia de Industria y Comercio quejas por infracciones a lo dispuesto en la citada ley y las demás normas que la modifiquen, adicionen o complementen. \n\nE) Revocar la autorización y/o solicitar la supresión del dato cuando en el Tratamiento no se respeten los principios, derechos y garantías constitucionales y legales. La revocatoria y/o supresión procederá cuando la Superintendencia de Industria y Comercio haya determinado que en el tratamiento el responsable o encargado han incurrido en conductas contrarias a la ley y a la Constitución. \n\nF) Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento. \n\nAdemás de que Pomodoro Time se encargará de: \n\nA) Garantizar al titular, en todo tiempo, el pleno y efectivo ejercicio del derecho de hábeas data. \n\nB) Solicitar y conservar, en las condiciones previstas en la presente ley, copia de la respectiva autorización otorgada por el titular. \n\nC) Informar debidamente al titular sobre la finalidad de la recolección y los derechos que le asisten por virtud de la autorización otorgada. \n\nD) Conservar la información bajo las condiciones de seguridad necesarias para impedir su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. \n\nE) Garantizar que la información que se suministre al encargado del tratamiento sea veraz, completa, exacta, actualizada, comprobable y comprensible. \n\nF) Actualizar la información, comunicando de forma oportuna al encargado del tratamiento, todas las novedades respecto de los datos que previamente le haya suministrado y adoptar las demás medidas necesarias para que la información suministrada a este se mantenga actualizada. \n\nG) Rectificar la información cuando sea incorrecta y comunicar lo pertinente al encargado del tratamiento. \n\nH) Suministrar al encargado del tratamiento, según el caso, únicamente datos cuyo tratamiento esté previamente autorizado de conformidad con lo previsto en la presente ley. \n\nI) Exigir al encargado del tratamiento en todo momento, el respeto a las condiciones de seguridad y privacidad de la información del titular. \n\nJ) Tramitar las consultas y reclamos formulados en los términos señalados en la presente ley. \n\nK) Adoptar un manual interno de políticas y procedimientos para garantizar el adecuado cumplimiento de la presente ley y en especial, para la atención de consultas y reclamos. \n\nL) Informar al encargado del tratamiento cuando determinada información se encuentra en discusión por parte del titular, una vez se haya presentado la reclamación y no haya finalizado el trámite respectivo. \n\nM) Informar a solicitud del titular sobre el uso dado a sus datos. \n\nN) Informar a la autoridad de protección de datos cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los titulares. \n\nO) Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y Comercio. \n\nUna vez leido lo anterior y para continuar con el registro tiene que responder la siguiente pregunta:\n¿Acepta el tratamiento de su información con base a la ley anteriormente mencionada?', [
            {text: 'Rechazar', onPress: console.log(false)},
            {text: 'Aceptar', onPress: () => this.props.navigation.navigate('Registro')},
        ])    
        }

        renderButtonOrLoading(){
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