import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Linking} from 'react-native'
import 'firebase/firestore'
import {Icon} from 'react-native-elements'

const Contactanos = () => {
    Linking.openURL('mailto: afmelo@ucundinamarca.edu.co, diegoalexanderdiaz@ucundinamarca.edu.co, aparenas@ucundinamarca.edu.co');
};

export default function rPretestPostestHome({navigation}) {
    const Confirmacion = () => {
        Alert.alert('⚠️ Cerrar sesión', '¿Estás seguro que quieres cerrar sesión?', [
            {text: 'Cancel', onPress: console.log(false)},
            {text: 'OK', onPress: () => navigation.navigate('Inicio de Sesion')},
        ])
    }
    const TratamientoPretest = () => {
        Alert.alert('⚠️ Requerimiento para el test', 'Ley 1581 de 2012:\n\n¿Aceptas que la información digitada en el examen sea tratada posteriormente?', [
            {text: 'Cancel', onPress: () => console.log('Ask me later pressed')},
            {text: 'Rechazar', onPress: console.log(false)},
            {text: 'Aceptar', onPress: () => navigation.navigate('Pretest')},
        ])
    }
    const TratamientoPostest = () => {
        Alert.alert('⚠️ Requerimiento para el test', 'Ley 1581 de 2012:\n\n¿Aceptas que la información digitada en el cuestionario sea tratada posteriormente?', [
            {text: 'Cancel', onPress: () => console.log('Ask me later pressed')},
            {text: 'Rechazar', onPress: console.log(false)},
            {text: 'Aceptar', onPress: () => navigation.navigate('Postest')},
        ])
    }
    const TratamientoSeguimiento = () => {
        Alert.alert('⚠️ Requerimiento para el cuestionario', 'Ley 1581 de 2012:\n\n¿Aceptas que la información digitada en el cuestionario sea tratada posteriormente?', [
            {text: 'Cancel', onPress: () => console.log('Ask me later pressed')},
            {text: 'Rechazar', onPress: console.log(false)},
            {text: 'Aceptar', onPress: () => navigation.navigate('CSeguimiento')},
        ])
    }
    const MasInformacion = () => {
        Alert.alert('Más Información', 'Algunas cosas que debes de tener en cuenta son: \n\nA) Técnica de Trabajo Pomodoro:\n\nLa Técnica Pomodoro es un método para mejorar la administración del tiempo dedicado a una actividad. \n\nFue desarrollado por Francesco Cirillo a fines de la década de 1980. Se usa un temporizador para dividir el tiempo en intervalos indivisibles, llamados pomodoros, de 25 minutos de actividad, seguidos de 5 minutos de descanso, con pausas más largas cada cuatro pomodoros. \n\nB) Pretest: \n\nEl pretest es una prueba que se realiza antes de la primera puesta en marcha de la aplicación, y a través de la cual se determina información general de los participantes (edad, genero, semestre, y conocimiento previo de la técnica de trabajo Pomodoro). \n\nC) Postest: \n\nEl postest, a diferencia del pretest se realiza una vez que se hizo la primera puesta en marcha de la aplicación, y nos permite determinar el nivel de procrastinación presente en cada uno de los participantes. \n\nD) Cuestionario de seguimiento (Opcional): \n\nEs para aquellas personas que quieren recibir un informe detallado y con gráficas acerca del trabajo que se realizó en la semana, y que permite comparar con semanas anteriores la productividad presente en esta.', [
            {text: 'Cancel', onPress: console.log(false)},
            {text: 'OK', onPress: console.log(false)},
        ])
    }
    
    return (
        <ScrollView>
            <View style={styles.center}>
                <Text style={styles.text}>Seleccione que cuestionario desea realizar:</Text>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={TratamientoPretest}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Pretest</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={TratamientoPostest}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Postest</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={TratamientoSeguimiento}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Cuestionario de seguimiento</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Text style={styles.text}>¿Tienes alguna duda? Contáctanos:</Text>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={Contactanos}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Contáctanos</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={MasInformacion}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Más información</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={Confirmacion}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Cerrar sesión</Text>
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
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: '10%',
    },
    btnView:{
        borderRadius: 8,
        paddingVertical: 10,
        marginTop: 15,
        paddingHorizontal: 10,
        backgroundColor: '#3491cd'
    }
});