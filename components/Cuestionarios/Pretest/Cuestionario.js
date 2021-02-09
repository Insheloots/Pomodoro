import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Picker, Alert} from 'react-native'
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

export default function Cuestionario({navigation}) {

    const [state, setState] = useState({
        primera: "",
        segunda: "",
        tercera: "",
        cuarta: "",
        quinta: "",
        sexta: "",
        septima: "",
        octava: "",
        novena: "",
        decima: "",
    })

    const EstablecerTexto = (primera, value) => {
        setState({ ...state, [primera]: value})
    }

    const crearRespuesta = async() => {
        await db.collection('Pretest').add({
            primera: state.primera,
            segunda: state.segunda,
            tercera: state.tercera,
            cuarta: state.cuarta,
            quinta: state.quinta,
            sexta: state.sexta,
            septima: state.septima,
            octava: state.octava,
            novena: state.novena,
            decima: state.decima
        })
        Alert.alert(
            '✅ Proceso exitoso',
            'Ha realizado el Pretest correctamente.',
        )
    }

    const Confirmacion = () => {
        if(state.primera === '' && state.segunda === '' && state.tercera === '' && state.cuarta === '' && state.quinta === '' && state.sexta === '' && state.septima === '' && state.octava === '' && state.novena === '' && state.decima === ''){
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

        else if(state.octava === ''){
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

        else if(state.novena === ''){
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

        else if(state.decima === ''){
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
                <Text style={styles.text}>1. ¿Qué edad tiene?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('primera', value)} selectedValue={state.primera}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Entre 14 y 24" value="Entre 14 y 24"/>
                    <Picker.Item label="Entre 25 y 34" value="Entre 25 y 34"/>
                    <Picker.Item label="Entre 35 y 44 años" value="Entre 35 y 44 años"/>
                    <Picker.Item label="Más de 45 años" value="Más de 45 años"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>2. Genero:</Text>
                <Picker onValueChange={(value) => EstablecerTexto('segunda', value)} selectedValue={state.segunda}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Masculino" value="Masculino"/>
                    <Picker.Item label="Femenino" value="Femenino"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>3. ¿Qué semestre cursa actualmente?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('tercera', value)} selectedValue={state.tercera}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Entre primero y tercero" value="Entre primero y tercero"/>
                    <Picker.Item label="Entre cuarto y sexto" value="Entre cuarto y sexto"/>
                    <Picker.Item label="Entre séptimo y noveno" value="Entre séptimo y noveno"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>4. ¿Dispone actualmente de un dispositivo móvil?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('cuarta', value)} selectedValue={state.cuarta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Si" value="Si"/>
                    <Picker.Item label="No" value="No"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>5. ¿Ha utilizado con anterioridad aplicaciones de gestión de tiempo?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('quinta', value)} selectedValue={state.quinta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Si" value="Si"/>
                    <Picker.Item label="No" value="No"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>6. ¿Considera necesario una planeación y una organización al momento de realizar una actividad?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('sexta', value)} selectedValue={state.sexta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Si" value="Si"/>
                    <Picker.Item label="No" value="No"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>7. ¿Ha oído hablar de la técnica de trabajo Pomodoro?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('septima', value)} selectedValue={state.septima}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Si" value="Si"/>
                    <Picker.Item label="No" value="No"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>8. ¿Consideraría necesaria la creación de una aplicación móvil que permitiera gestionar su tiempo?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('octava', value)} selectedValue={state.octava}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Si" value="Si"/>
                    <Picker.Item label="No" value="No"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>9. ¿Cree usted que las pausas activas estimulan el aprendizaje?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('novena', value)} selectedValue={state.novena}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Si" value="Si"/>
                    <Picker.Item label="No" value="No"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>10. ¿Estaría a favor de la implementación de un gestor de tiempo con pausas activas de 5 minutos cada 25 minutos de clase?</Text>
                <Picker onValueChange={(value) => EstablecerTexto('decima', value)} selectedValue={state.decima}>
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
