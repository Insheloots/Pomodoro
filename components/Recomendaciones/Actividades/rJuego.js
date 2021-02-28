import React, {useEffect, useState} from 'react'
import {View, ScrollView, StyleSheet, Text, Linking} from 'react-native'
import * as firebase from 'firebase'
import 'firebase/firestore'
import {ListItem} from 'react-native-elements'

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

export default function rJuego({navigation}) {

    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {
        db.collection('RJuego').onSnapshot(querySnapshot => {
        const respuestas = [];
            querySnapshot.docs.forEach(doc =>{
                const {titulojuego, desarrolladorjuego, fuentejuego} = doc.data() 
                respuestas.push({
                    id: doc.id,
                    titulojuego,
                    desarrolladorjuego,
                    fuentejuego
                })
            })
        setRespuestas(respuestas)
        })
    }, [])

    return(
        <ScrollView>
            <View style={styles.center}>
                <Text style={styles.text}>Juegos:</Text>
                </View>
                {respuestas.map(respuesta =>{
                    const Juego = () => {
                        Linking.openURL(respuesta.fuentejuego);
                    };
                    return(
                        <ListItem key={respuesta.id} bottomDivider onPress={Juego}> 
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>{respuesta.titulojuego}:</ListItem.Title>
                                <ListItem.Subtitle>{respuesta.desarrolladorjuego}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
                
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
    text: {
        fontSize: 14,
    }
});
