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
                <Text style={styles.text}>4. ¿Dispone actualmente de un dispositivo móvil?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('cuarta', value)} selectedValue={state.cuarta}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Si" value="Si"/>
                    <Picker.Item color="#344953" label="No" value="No"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>5. ¿Ha utilizado con anterioridad aplicaciones de gestión de tiempo?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('quinta', value)} selectedValue={state.quinta}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Si" value="Si"/>
                    <Picker.Item color="#344953" label="No" value="No"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>6. ¿Considera necesario una planeación y una organización al momento de realizar una actividad?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('sexta', value)} selectedValue={state.sexta}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Si" value="Si"/>
                    <Picker.Item color="#344953" label="No" value="No"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>7. ¿Ha oído hablar de la técnica de trabajo Pomodoro?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('septima', value)} selectedValue={state.septima}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Si" value="Si"/>
                    <Picker.Item color="#344953" label="No" value="No"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>8. ¿Consideraría necesaria la creación de una aplicación móvil que permita gestionar su tiempo?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('octava', value)} selectedValue={state.octava}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Si" value="Si"/>
                    <Picker.Item color="#344953" label="No" value="No"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>9. ¿Cree usted que las pausas activas estimulan el aprendizaje?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('novena', value)} selectedValue={state.novena}>
                    <Picker.Item color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item color="#344953" label="Si" value="Si"/>
                    <Picker.Item color="#344953" label="No" value="No"/>
                </Picker>
                </View>
            </View>
            <View style={styles.questions}>
                <Text style={styles.text}>10. ¿Estaría a favor de la implementación de un gestor de tiempo con pausas activas de 5 minutos cada 25 minutos de clase?</Text>
                <View style={styles.pick} >
                <Picker style={styles.pickP} onValueChange={(value) => EstablecerTexto('decima', value)} selectedValue={state.decima}>
                    <Picker.Item  color="#ccc" label="Selecciona una opción" value="Selecciona una opción"/>
                    <Picker.Item  color="#344953" label="Si" value="Si"/>
                    <Picker.Item  color="#344953" label="No" value="No"/>
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
