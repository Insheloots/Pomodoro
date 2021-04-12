import React, {useState} from 'react'
import {View, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, Linking} from 'react-native'
import 'firebase/firestore'
import {Icon} from 'react-native-elements'

export default function Music({navigation}) {

const Llovizna = async () => {
    await Linking.openURL('https://youtu.be/F-toHGbg71g');
};

const Naturaleza = async () => {
    await Linking.openURL('https://youtu.be/2jiNaLxAYwo');
};

const NCS = async () => {
    await Linking.openURL('https://youtu.be/cRHD8ZPl2vI');
};

const LOFI = async () => {
    await Linking.openURL('https://youtu.be/C_z5ljT3xyk');
};

    return (
        <ScrollView style={styles.background}>
            <View style={styles.center}>
                <Text style={styles.text}>Música</Text>
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
    background:{
        paddingTop: '10%',
        backgroundColor: "white"
    },
    center: {
        flex: 1,
        width: '80%',
        paddingVertical: '5%',
        marginHorizontal: '4%'
    },
    questions: {
        flex: 1,
        width: '80%',
        marginHorizontal: '4%',
        paddingTop: '2%',
    },
    text: {
        fontFamily: "boldM",
        fontSize: 20,
    },
    buttonText: {
        color: "white",
        fontFamily: 'regularM',
        fontSize: 14,
        textAlign: "center",
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
        borderRadius: 25,
        paddingVertical: 12,
        marginTop: 15,
        backgroundColor: "#1f65ff",
    }
});