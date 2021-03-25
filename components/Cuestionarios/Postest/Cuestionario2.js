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

export default function Cuestionario2({navigation}) {
    
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
        onceava: "",
        doceava: "",
    })

    const EstablecerTexto = (primera, value) => {
        setState({ ...state, [primera]: value})
    }

    const crearRespuesta = async() => {
        await db.collection('Postest').add({
            primera: state.primera,
            segunda: state.segunda,
            tercera: state.tercera,
            cuarta: state.cuarta,
            quinta: state.quinta,
            sexta: state.sexta,
            septima: state.septima,
            octava: state.octava,
            novena: state.novena,
            decima: state.decima,
            onceava: state.onceava,
            doceava: state.doceava
        })
        Alert.alert(
            '✅ Proceso exitoso',
            'Ha realizado el Postest correctamente.',
        )
    }

    const Confirmacion = () => {
        if(state.primera === '' && state.segunda === '' && state.tercera === '' && state.cuarta === '' && state.quinta === '' && state.sexta === '' && state.septima === '' && state.octava === '' && state.novena === '' && state.decima === '' && state.onceava === '' && state.doceava === ''){
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

        else if(state.onceava === ''){
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

        else if(state.doceava === ''){
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
            'Ley 1581 de 2012:\n\nAl darle en el botón "Enviar" aceptas que la información digitada en el cuestionario sea tratada posteriormente', [
                {text: 'Cancel', onPress: () => console.log('Ask me later pressed')},
                {text: 'Rechazar', onPress: console.log(false)},
                {text: 'Aceptar', onPress: () => crearRespuesta()
            },
            ])
            
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
                    <Picker.Item label="Primer semestre" value="Primer semestre"/>
                    <Picker.Item label="Segundo semestre" value="Segundo semestre"/>
                    <Picker.Item label="Tercer semestre" value="Tercer semestre"/>
                    <Picker.Item label="Cuarto semestre" value="Cuarto semestre"/>
                    <Picker.Item label="Quinto semestre" value="Quinto semestre"/>
                    <Picker.Item label="Sexto semestre" value="Sexto semestre"/>
                    <Picker.Item label="Septimo semestre" value="Septimo semestre"/>
                    <Picker.Item label="Octavo semestre" value="Octavo semestre"/>
                    <Picker.Item label="Noveno semestre" value="Noveno semestre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>4. Pospongo lo que tengo que hacer más de lo razonable.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('cuarta', value)} selectedValue={state.cuarta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>5. Me lamento de no haber hecho antes lo que tenía pendiente.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('quinta', value)} selectedValue={state.quinta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>6. Me pongo a pensar en otras cosas mientras realizo una actividad.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('sexta', value)} selectedValue={state.sexta}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>7. Suelo realizar las actividades sin tomar como referencia la fecha de entrega.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('septima', value)} selectedValue={state.septima}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>8. Desperdicio mi tiempo libre haciendo cosas sin importancia.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('octava', value)} selectedValue={state.octava}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>9. Omito la programación de un tiempo específico para realizar una actividad.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('novena', value)} selectedValue={state.novena}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>10. No suelo enfocarme en una actividad durante su realización.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('decima', value)} selectedValue={state.decima}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>11. No encuentro el gusto ni me motiva el comenzar una actividad o tarea.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('onceava', value)} selectedValue={state.onceava}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
                </Picker>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>12. No siento motivación al haber completado una actividad que tenía pendiente.</Text>
                <Picker onValueChange={(value) => EstablecerTexto('doceava', value)} selectedValue={state.doceava}>
                    <Picker.Item label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item label="Nunca" value="Nunca"/>
                    <Picker.Item label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item label="Aveces" value="Aveces"/>
                    <Picker.Item label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item label="Siempre" value="Siempre"/>
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
