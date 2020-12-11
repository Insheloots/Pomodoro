import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Tip from '../components/tip'
import Timer from '../components/Timer/PomodoroTimer'
import Home from '../components/home'
import LoginScreen from '../components/LoginScreen'
import RegisterScreen from '../components/RegisterScreen'
import ToDo from '../components/To Do List/hometodo'
import Pretest from '../components/Cuestionarios/Pretest/Cuestionario'
import Postest from '../components/Cuestionarios/Postest/Cuestionario2'

const Stack = createStackNavigator()

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = 'Postest'
                component = {Postest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'Pretest'
                component = {Pretest}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'Inicio de Sesion'
                component = {LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'Registro'
                component = {RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'ToDoList'
                component = {ToDo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name = 'Home'
                component = {Home}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name= 'Consejo'
                component={Tip}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name= 'Temporizador Pomodoro'
                component={Timer}
                options={{ headerShown: false }}
            />
            
        </Stack.Navigator>
    )
}