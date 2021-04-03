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

export default function rNoticia({navigation}) {

    const [respuestas, setRespuestas] = useState([])

    useEffect(() => {
        db.collection('RNoticia').onSnapshot(querySnapshot => {
        const respuestas = [];
            querySnapshot.docs.forEach(doc =>{
                const {titulonoticia, especificacionnoticia, fuentenoticia} = doc.data() 
                respuestas.push({
                    id: doc.id,
                    titulonoticia,
                    especificacionnoticia,
                    fuentenoticia
                })
            })
        setRespuestas(respuestas)
        })
    }, [])

    return(
        <ScrollView style={styles.background}>
            <View style={styles.center}>
                </View>
                {respuestas.map(respuesta =>{
                    const Noticia = () => {
                        Linking.openURL(respuesta.fuentenoticia);
                    };
                    return(
                        <ListItem key={respuesta.id} bottomDivider onPress={Noticia}> 
                            <ListItem.Chevron/>
                            <ListItem.Content>
                                <ListItem.Title>{respuesta.titulonoticia}:</ListItem.Title>
                                <ListItem.Subtitle>{respuesta.especificacionnoticia}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    );
                })}
                
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "white"
    },
    center: {
        flex: 1,
        paddingTop: '1%',
        backgroundColor: "white"
    },
    text: {
        fontSize: 14,
    }
});
