import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'
import Login from '../components/login'
import Register from '../components/register'
import Tip from '../components/tip'

const Stack = createStackNavigator()

export default function Navigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name= 'Inicio de Sesion'
                component={Login}
            />
            <Stack.Screen
                name= 'Registro'
                component={Register}
            />
            <Stack.Screen
                name= 'Consejo'
                component={Tip}
            />

        </Stack.Navigator>
    )
}