import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Picker, Alert, TextInput, Linking} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'

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
const db = firebase.firestore();

export default function CSeguimiento({navigation}) {

    const [state, setState] = useState({
        primera: "",
        segunda: "",
        tercera: "",
        cuarta: "",
    })

    const EstablecerTexto = (primera, value) => {
        setState({ ...state, [primera]: value})
    }

    const crearRespuesta = async() => {
        await db.collection('CSeguimiento').add({
            primera: state.primera,
            segunda: state.segunda,
            tercera: state.tercera,
            cuarta: state.cuarta,
        })
        Alert.alert(
            '✅ Proceso exitoso',
            'Ha realizado el cuestionario correctamente.',
        )
    }

    const Confirmacion = () => {
        if(state.primera === '' && state.segunda === '' && state.tercera === '' && state.cuarta === ''){
            Alert.alert(
              '⚠️ Campos vacios',
              'Debe de llenar todos los campos.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
            )
        }
        
        else if(state.primera === ''){
              Alert.alert(
                '⚠️ Campos vacios',
                'Debe de llenar todos los campos.',
                [
                  {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }

        else if(state.segunda === ''){
            Alert.alert(
              '⚠️ Campos vacios',
              'Debe de llenar todos los campos.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
          )
      }

        else if(state.tercera === ''){
              Alert.alert(
                '⚠️ Campos vacios',
                'Debe de llenar todos los campos.',
                [
                  {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }

        else if(state.cuarta === ''){
            Alert.alert(
              '⚠️ Campos vacios',
              'Debe de llenar todos los campos.',
              [
                {text: 'Reintentar', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false }
          )
      }

        else{
            Alert.alert('⚠️ Confirmación', 
            'Ley 1581 de 2012:\n\nAl darle en el botón "Enviar" aceptas que la información digitada en el cuestionario puede ser tratada posteriormente', [
                {text: 'Más info', onPress: () => Linking.openURL('https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981')},
                {text: 'Rechazar', onPress: console.log(false)},
                {text: 'Aceptar', onPress: () => crearRespuesta()
            },
            ])
            
        }
    }

    return (
        <View style={styles.background}>
            <View style={styles.questions}>
                <Text style={{fontFamily: 'semiBoldO', marginVertical:10, textAlign:'justify'}}>Responda las siguientes preguntas una vez por semana y en el transcurso de 2 dias aproximadamente le llegará un informe personalizado a su correo electrónico.</Text>
                <Text style={styles.text}>1. Correo electrónico:</Text>
                    <TextInput style={{marginHorizontal: 3,  borderWidth: 1, borderColor: '#344953', borderRadius: 5, marginVertical: '3%', fontFamily: 'regularO', paddingVertical: 8, paddingLeft:10}} placeholder="Ingrese el correo electrónico" onChangeText={(value) => EstablecerTexto('primera', value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>2. ¿Durante esta semana cuántas veces al día utilizó Pomodoro Time?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('segunda', value)} selectedValue={state.segunda}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="No la utilice durante esta semana" value="No la utilice durante esta semana"/>
                    <Picker.Item color="#344953" label="Una vez" value="Una vez"/>
                    <Picker.Item color="#344953" label="Entre 2 y 5 veces" value="Entre 2 y 5 veces"/>
                    <Picker.Item color="#344953" label="Entre 6 y 10 veces" value="Entre 6 y 10 veces"/>
                    <Picker.Item color="#344953" label="Más de 10 veces" value="Más de 10 veces"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>3. ¿Durante esta semana cuánto duró en culminar una actividad aproximadamente?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('tercera', value)} selectedValue={state.tercera}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Entre 20 y 30 minutos" value="Entre 20 y 30 minutos"/>
                    <Picker.Item color="#344953" label="Entre 40 y 60 minutos" value="Entre 40 y 60 minutos"/>
                    <Picker.Item color="#344953" label="Entre 1 y 2 horas" value="Entre una hora y dos horas"/>
                    <Picker.Item color="#344953" label="Más de 2 horas" value="Más de 2 horas"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>4. ¿Cuántas veces a la semana utilizo Pomodoro Time aproximadamente?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('cuarta', value)} selectedValue={state.cuarta}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="No la utilice durante esta semana" value="No la utilice durante esta semana"/>
                    <Picker.Item color="#344953" label="Entre 1 y 5 veces" value="Entre 1 y 5 veces"/>
                    <Picker.Item color="#344953" label="Entre 6 y 10 veces" value="Entre 6 y 10 veces"/>
                    <Picker.Item color="#344953" label="Entre 10 y 20 veces" value="Entre 10 y 20 veces"/>
                    <Picker.Item color="#344953" label="Más de 20 veces" value="Más de 20 veces"/>
                </Picker>
                </View>
            </View>
            <View style={{marginVertical: '5%', marginHorizontal: '15%'}}>
                    <TouchableOpacity onPress={() => Confirmacion()}>
                    <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Enviar</Text>
                    </View>
                    </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    background: {
        flex:1,
        backgroundColor: '#fff',
    },
    questions: {
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: '8%',
        paddingTop: '2%',
        marginVertical: '1%',
    },
    pickP: {
        color: '#344953',  
        justifyContent: 'center',
        marginHorizontal: 5,  
    },
    pick: {
        borderWidth: 1,
        borderColor: '#344953',
        borderRadius: 10,
        marginVertical: '3%',
        fontFamily: 'regularO',
    },
    text: {
        marginVertical:5,
        marginHorizontal: 3,
        textAlign:'justify',
        fontFamily: 'regularO',
        fontSize: 14,
    },
    buttonText: {
        fontFamily: 'regularM',
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    btnView:{
        borderRadius: 25,
        paddingVertical: 12,
        marginTop: 15,
        backgroundColor: "#1f65ff",
    }
});
