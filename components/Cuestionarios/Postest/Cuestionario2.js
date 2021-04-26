import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, Picker, Alert, Linking} from 'react-native'
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
            'Ley 1581 de 2012:\n\nAl darle en el botón "Enviar" aceptas que la información digitada en el cuestionario puede ser tratada posteriormente', [
                {text: 'Más info', onPress: () => Linking.openURL('https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981')},
                {text: 'Rechazar', onPress: console.log(false)},
                {text: 'Aceptar', onPress: () => crearRespuesta()
            },
            ])
            
        }
    }

    return (
        <ScrollView>
            <View style={styles.background}>
            <View style={styles.questions}>
                <Text style={styles.text}>1. ¿Qué edad tiene?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('primera', value)} selectedValue={state.primera}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Entre 14 y 24" value="Entre 14 y 24"/>
                    <Picker.Item color="#344953" label="Entre 25 y 34" value="Entre 25 y 34"/>
                    <Picker.Item color="#344953" label="Entre 35 y 44 años" value="Entre 35 y 44 años"/>
                    <Picker.Item color="#344953" label="Más de 45 años" value="Más de 45 años"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>2. Genero:</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('segunda', value)} selectedValue={state.segunda}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Masculino" value="Masculino"/>
                    <Picker.Item color="#344953" label="Femenino" value="Femenino"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>3. ¿Qué semestre cursa actualmente?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('tercera', value)} selectedValue={state.tercera}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Primer semestre" value="Primer semestre"/>
                    <Picker.Item color="#344953" label="Segundo semestre" value="Segundo semestre"/>
                    <Picker.Item color="#344953" label="Tercer semestre" value="Tercer semestre"/>
                    <Picker.Item color="#344953" label="Cuarto semestre" value="Cuarto semestre"/>
                    <Picker.Item color="#344953" label="Quinto semestre" value="Quinto semestre"/>
                    <Picker.Item color="#344953" label="Sexto semestre" value="Sexto semestre"/>
                    <Picker.Item color="#344953" label="Septimo semestre" value="Septimo semestre"/>
                    <Picker.Item color="#344953" label="Octavo semestre" value="Octavo semestre"/>
                    <Picker.Item color="#344953" label="Noveno semestre" value="Noveno semestre"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>4. Pospongo lo que tengo que hacer más de lo razonable.</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('cuarta', value)} selectedValue={state.cuarta}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Nunca" value="Nunca"/>
                    <Picker.Item color="#344953" label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item color="#344953" label="Aveces" value="Aveces"/>
                    <Picker.Item color="#344953" label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item color="#344953" label="Siempre" value="Siempre"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>5. Me lamento de no haber hecho antes lo que tenía pendiente.</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('quinta', value)} selectedValue={state.quinta}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Nunca" value="Nunca"/>
                    <Picker.Item color="#344953" label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item color="#344953" label="Aveces" value="Aveces"/>
                    <Picker.Item color="#344953" label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item color="#344953" label="Siempre" value="Siempre"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>6. Me pongo a pensar en otras cosas mientras realizo una actividad.</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('sexta', value)} selectedValue={state.sexta}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Nunca" value="Nunca"/>
                    <Picker.Item color="#344953" label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item color="#344953" label="Aveces" value="Aveces"/>
                    <Picker.Item color="#344953" label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item color="#344953" label="Siempre" value="Siempre"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>7. Suelo realizar las actividades sin tomar como referencia la fecha de entrega.</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('septima', value)} selectedValue={state.septima}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Nunca" value="Nunca"/>
                    <Picker.Item color="#344953" label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item color="#344953" label="Aveces" value="Aveces"/>
                    <Picker.Item color="#344953" label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item color="#344953" label="Siempre" value="Siempre"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>8. Desperdicio mi tiempo libre haciendo cosas sin importancia.</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('octava', value)} selectedValue={state.octava}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Nunca" value="Nunca"/>
                    <Picker.Item color="#344953" label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item color="#344953" label="Aveces" value="Aveces"/>
                    <Picker.Item color="#344953" label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item color="#344953" label="Siempre" value="Siempre"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>9. Omito la programación de un tiempo específico para realizar una actividad.</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('novena', value)} selectedValue={state.novena}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Nunca" value="Nunca"/>
                    <Picker.Item color="#344953" label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item color="#344953" label="Aveces" value="Aveces"/>
                    <Picker.Item color="#344953" label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item color="#344953" label="Siempre" value="Siempre"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>10. No suelo enfocarme en una actividad durante su realización.</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('decima', value)} selectedValue={state.decima}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Nunca" value="Nunca"/>
                    <Picker.Item color="#344953" label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item color="#344953" label="Aveces" value="Aveces"/>
                    <Picker.Item color="#344953" label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item color="#344953" label="Siempre" value="Siempre"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>11. No encuentro el gusto ni me motiva el comenzar una actividad o tarea.</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('onceava', value)} selectedValue={state.onceava}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Nunca" value="Nunca"/>
                    <Picker.Item color="#344953" label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item color="#344953" label="Aveces" value="Aveces"/>
                    <Picker.Item color="#344953" label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item color="#344953" label="Siempre" value="Siempre"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>12. No siento motivación al haber completado una actividad que tenía pendiente.</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('doceava', value)} selectedValue={state.doceava}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Nunca" value="Nunca"/>
                    <Picker.Item color="#344953" label="Casi nunca" value="Casi nunca"/>
                    <Picker.Item color="#344953" label="Aveces" value="Aveces"/>
                    <Picker.Item color="#344953" label="Casi siempre" value="Casi siempre"/>
                    <Picker.Item color="#344953" label="Siempre" value="Siempre"/>
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
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
    },
    questions: {
        flex: 1,
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
        marginHorizontal: 3,
        fontFamily: 'regularO',
        textAlign: 'justify',
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
