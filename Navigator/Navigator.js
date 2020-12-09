import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'
import Login from '../components/login'
import Register from '../components/register'
import Tip from '../components/tip'
import Timer from '../components/Timer/PomodoroTimer'
import Home from '../components/home'
import LoginScreen from '../components/LoginScreen'
import RegisterScreen from '../components/RegisterScreen'

const Stack = createStackNavigator()

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = 'Home'
                component = {Home}
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