import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function home({navigation}){

        return(
            <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image style={{width: '100%', height: 300, resizeMode: 'contain',}} source={require('../assets/images/logo-home.png')}/>

                <Text style={ {fontSize: 40, fontWeight: 'bold', }}>¡Hola!</Text>
                <Text style={{ fontSize: 16, color: 'grey', textAlign: 'center', marginHorizontal: 20 }}>Bienvenido a Pomodoro Time esta 
                aplicación te ayudara a gestionar tu tiempo.</Text>


                <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Inicio de Sesion')}
                        style={{ backgroundColor: '#0d47a1', padding: 10, width: 150, borderRadius: 30, marginHorizontal: 2}}
                    >
                        <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 18}}>Iniciar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Registro')}
                        style={{ backgroundColor: '#FFF', padding: 10, width: 150, borderRadius: 30, 
                        marginHorizontal: 2, borderWidth: 1, borderColor: '#0d47a1', }}
                    >   
                        <Text style={{ textAlign: 'center', color: '#0d47a1', fontSize: 18}}>Registrate</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{fontSize: 16, marginTop: 10, }}>O puedes iniciar sesion con Google</Text>
                <View style={{ flexDirection: 'row', marginTop: 20}}>
                    <View style={{height: 50, width: 50, borderRadius: 50/2, backgroundColor: '#f44336',
                        alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>

                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#FFF'}}>G</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
            
          
        );
    
    
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
});