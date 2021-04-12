import React from 'react'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native'
import 'firebase/firestore'
import {Icon} from 'react-native-elements';
import { AppLoading } from "expo";
import {
    useFonts,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import {
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";

export default function rHome({navigation}) {
    let [fontsLoaded, error] = useFonts({
        regularO: OpenSans_400Regular,
        semiBoldO: OpenSans_600SemiBold,
        boldO: OpenSans_700Bold,
        lightM: Montserrat_300Light,
        regularM: Montserrat_400Regular,
        mediumM: Montserrat_500Medium,
        boldM: Montserrat_700Bold,
        extraBoldM: Montserrat_800ExtraBold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.text}>Recomendaciones</Text>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('RCancion')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Música</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('REjercicio')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Ejercicios físicos</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('RFrase')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Frases de diferentes autores</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('RNoticia')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}>Noticias actuales</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={{marginBottom:'2%',marginHorizontal: '8%'}}>
                <TouchableOpacity onPress={() => navigation.navigate('RJuego')}>
                <View style={styles.btnView}>
                    <Text style={styles.buttonText}> Juegos</Text>
                </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container:{
        paddingTop: '10%',
        backgroundColor: "white"
    },
    center: {
        flex: 1,
        width: '80%',
        paddingVertical: '5%',
        marginHorizontal: '4%'
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
    btnView:{
        borderRadius: 25,
        paddingVertical: 12,
        marginTop: 15,
        backgroundColor: "#1f65ff",
    }
});