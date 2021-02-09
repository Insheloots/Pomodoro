import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Picker, Alert, TextInput} from 'react-native'
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
        quinta: "",
        sexta: "",
        septima: "",
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
            quinta: state.quinta,
            sexta: state.sexta,
            septima: state.septima,
        })
        Alert.alert(
            '✅ Proceso exitoso',
            'Ha realizado el cuestionario correctamente.',
        )
    }

    const Confirmacion = () => {
        if(state.primera === '' && state.segunda === '' && state.tercera === '' && state.cuarta === '' && state.quinta === '' && state.sexta === '' && state.septima === ''){
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

        else if(state.quinta === ''){
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

        else if(state.sexta === ''){
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
    
        else if(state.septima === ''){
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
            crearRespuesta();
        }
    }

    return (
        <ScrollView>
            <View style={styles.center}>
                <Text style={styles.text}>Responda las siguientes preguntas una vez por semana y en el transcurso de 2 dias aproximadamente le llegará un informe personalizado a su correo electrónico.</Text>
                <Text style={styles.text}>1. Correo electrónico:</Text>
                    <TextInput style={{marginVertical: '2%'}} placeholder="Ingrese el correo electrónico" onChangeText={(value) => EstablecerTexto('primera', value)}></TextInput>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>2. ¿Durante esta semana cuántas veces al día utilizó Pomodoro Time?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('segunda', value)} selectedValue={state.segunda}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="No la utilice durante esta semana" value="No la utilice durante esta semana"/>
                    <Picker.Item label="Una vez" value="Una vez"/>
                    <Picker.Item label="Entre 2 y 5 veces" value="Entre 2 y 5 veces"/>
                    <Picker.Item label="Entre 6 y 10 veces" value="Entre 6 y 10 veces"/>
                    <Picker.Item label="Más de 10 veces" value="Más de 10 veces"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>3. ¿Durante esta semana cuánto duró en culminar una actividad aproximadamente?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('tercera', value)} selectedValue={state.tercera}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Entre 20 y 30 minutos" value="Entre 20 y 30 minutos"/>
                    <Picker.Item label="Entre 40 y 60 minutos" value="Entre 40 y 60 minutos"/>
                    <Picker.Item label="Entre 1 y 2 horas" value="Entre una hora y dos horas"/>
                    <Picker.Item label="Más de 2 horas" value="Más de 2 horas"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>4. ¿Cuántas veces a la semana utilizo Pomodoro Time aproximadamente?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('cuarta', value)} selectedValue={state.cuarta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="No la utilice durante esta semana" value="No la utilice durante esta semana"/>
                    <Picker.Item label="Entre 1 y 5 veces" value="Entre 1 y 5 veces"/>
                    <Picker.Item label="Entre 6 y 10 veces" value="Entre 6 y 10 veces"/>
                    <Picker.Item label="Entre 10 y 20 veces" value="Entre 10 y 20 veces"/>
                    <Picker.Item label="Más de 20 veces" value="Más de 20 veces"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>5. ¿En esta semana qué prefirió al momento de la realización de una actividad?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('quinta', value)} selectedValue={state.quinta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Silencio para concentración total" value="Silencio para concentración total"/>
                    <Picker.Item label="Música relajante" value="Música relajante"/>
                    <Picker.Item label="Música LOFI" value="Musica tipo LOFI"/>
                    <Picker.Item label="Música sin Copyright (NCS)" value="Música sin Copyright (NCS)"/>
                    <Picker.Item label="Otro tipo de música" value="Otro tipo de música"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>6. ¿Qué recomendación fue la que le resulto más interesante durante el transcurso de la semana?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('sexta', value)} selectedValue={state.sexta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Recomendación músical" value="Recomendación músical"/>
                    <Picker.Item label="Información actual (Noticias)" value="Información actual (Noticias)"/>
                    <Picker.Item label="Recomendación deportiva (Ejercicios)" value="Recomendación deportiva (Ejercicios)"/>
                    <Picker.Item label="Recomendación de frases" value="Recomendación de frases"/>
                    <Picker.Item label="Ninguna me llamó la atención" value="Ninguna me llamó la atención"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>7. ¿Considera que durante la realización de las actividades fue más productivo gracias a la utilización de Pomodoro Time?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('septima', value)} selectedValue={state.septima}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Si" value="Si"/>
                    <Picker.Item label="No" value="No"/>
                </Picker>
            </View>
            <View style={{marginVertical: '5%', marginHorizontal: '8%'}}>
                    <TouchableOpacity onPress={() => Confirmacion()}>
                    <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Enviar</Text>
                    </View>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        width: '80%',
        paddingTop: '10%',
        marginHorizontal: '4%'
    },
    questions: {
        flex: 1,
        width: '80%',
        marginHorizontal: '4%',
        paddingTop: '2%',
    },
    text: {
        fontSize: 14,
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
    }
});
