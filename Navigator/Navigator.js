import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../components/LoginScreen'
import RegisterScreen from '../components/RegisterScreen'
import ForgotPassword from '../components/ForgotPassword'
import ToDo from '../components/To Do List/hometodo'
import MainHome from '../components/MainHome'
import MainActividad from '../components/MainActividad'
import hometodoindividual from '../components/To Do List/hometodoindividual'
import hometodoparejas from '../components/To Do List/hometodoparejas'
import hometodogrupal from '../components/To Do List/hometodogrupal'
import Timer from '../components/Timer/PomodoroTimer'
import Pretest from '../components/Cuestionarios/Pretest/Cuestionario'
import Postest from '../components/Cuestionarios/Postest/Cuestionario2'
import CSeguimiento from '../components/Cuestionarios/Seguimiento/CSeguimiento'
import PretestPostestHome from '../components/Cuestionarios/rPretestPostestHome'
import RHome from '../components/Recomendaciones/rHome'
import REjercicio from '../components/Recomendaciones/Actividades/rEjercicio'
import RNoticia from '../components/Recomendaciones/Actividades/rNoticia'
import RJuego from '../components/Recomendaciones/Actividades/rJuego'
import RFrase from '../components/Recomendaciones/Actividades/rFrase'
import RCancion from '../components/Recomendaciones/Actividades/rCancion'
import Music from '../components/Music/music'

const Stack = createStackNavigator()

export default function Navigator(){
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'white',
            },
            }}
          >
            <Stack.Screen
                name = 'Inicio de Sesion'
                component = {LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'RestablecerContraseña'
                component = {ForgotPassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='MainHome'
                component={MainHome}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name='MainActividad'
                component={MainActividad}
                options={{title: 'Actividades', headerTransparent: true}}
            />
            <Stack.Screen
                name= 'Temporizador Pomodoro'
                component={Timer}
                options={{title: 'Temporizador'}}
            />
            <Stack.Screen
                name = 'ToDoList'
                component = {ToDo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'hometodoindividual'
                component = {hometodoindividual}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'hometodoparejas'
                component = {hometodoparejas}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'hometodogrupal'
                component = {hometodogrupal}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'CSeguimiento'
                component = {CSeguimiento}
                options={{title: 'Cuestionario de Seguimiento'}}
            />
            <Stack.Screen
                name = 'RHome'
                component = {RHome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'PretestPostestHome'
                component = {PretestPostestHome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'Music'
                component = {Music}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'RCancion'
                component = {RCancion}
                options={{title: 'Canciones'}}
            />
            <Stack.Screen
                name = 'RNoticia'
                component = {RNoticia}
                options={{title: 'Noticias'}}
            />
            <Stack.Screen
                name = 'RFrase'
                component = {RFrase}
                options={{title: 'Frases'}}
            />
            <Stack.Screen
                name = 'RJuego'
                component = {RJuego}
                options={{title: 'Juegos'}}
            />
            <Stack.Screen
                name = 'REjercicio'
                component = {REjercicio}
                options={{title: 'Ejercicios'}}
            />
            <Stack.Screen
                name = 'Pretest'
                component = {Pretest}
                options={{title: 'Cuestionario de Pretest'}}
            />
            <Stack.Screen
                name = 'Postest'
                component = {Postest}
                options={{title: 'Cuestionario de Postest'}}
            />
            <Stack.Screen
                name = 'Registro'
                component = {RegisterScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}