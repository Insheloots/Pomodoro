import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Linking} from 'react-native'
import 'firebase/firestore'
import {Icon} from 'react-native-elements'

export default function Music({navigation}) {

const Llovizna = async () => {
    await Linking.openURL('https://youtu.be/Mr9T-943BnE');
};

const Naturaleza = async () => {
    await Linking.openURL('https://youtu.be/aWZR_lZ7eKU');
};

const NCS = async () => {
    await Linking.openURL('https://youtu.be/CSSKNCYaQUA');
};

const LOFI = async () => {
    await Linking.openURL('https://youtu.be/ZqwfusOI3Xo');
};

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
                <Icon name='music' color='#135D81' type='font-awesome'/>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: '14%'}} onPress={() => navigation.navigate('PretestPostestHome')}>
            <View style={styles.buttonContainer}>
                <Icon name='bars' color='#3491cd' type='font-awesome'/>
            </View>
        </TouchableOpacity>
        </View>
            <View style={styles.center}>
                <Text style={styles.text}>Música:</Text>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={Llovizna}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Sonidos de Llovizna</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={Naturaleza}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Sonidos de la naturaleza</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={NCS}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Música sin Copyright</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={LOFI}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Música LOFI</Text>
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