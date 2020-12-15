import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Linking} from 'react-native'
import 'firebase/firestore'
import {Icon} from 'react-native-elements'

const Contactanos = () => {
    Linking.openURL('mailto: afmelo@ucundinamarca.edu.co, diegoalexanderdiaz@ucundinamarca.edu.co');
};

export default function rPretestPostestHome({navigation}) {
    const Confirmacion = () => {
        Alert.alert('Cerrar sesión', '¿Estás seguro que quieres cerrar sesión?', [
            {text: 'Cancelar', onPress: console.log(false)},
            {text: 'Aceptar', onPress: () => navigation.navigate('Inicio de Sesion')},
        ])
    }
    return (
        <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('ToDoList')}>
            <View style={styles.buttonContainer}>
                <Icon name='sticky-note-o' color='#3491cd' type='font-awesome'/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('RHome')}>
            <View style={styles.buttonContainer}>
                <Icon name='lightbulb-o' color='#3491cd' type='font-awesome'/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('Music')}>
            <View style={styles.buttonContainer}>
                <Icon name='music' color='#3491cd' type='font-awesome'/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('PretestPostestHome')}>
            <View style={styles.buttonContainer}>
                <Icon name='bars' color='#135D81' type='font-awesome'/>
            </View>
        </TouchableOpacity>
        </View>
            <View style={styles.center}>
                <Text style={styles.text}>Seleccione que cuestionario desea realizar:</Text>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Pretest')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Pretest</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Postest')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Postest</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('CSeguimiento')}>
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