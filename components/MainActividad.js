import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons } from '@expo/vector-icons';
import {Icon} from 'react-native-elements';

import hometodoindividual from './To Do List/hometodoindividual'
import hometodoparejas from './To Do List/hometodoparejas'
import hometodogrupal from './To Do List/hometodogrupal'

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="hometodoindividual"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Individual"
        component={hometodoindividual}
        options={{
          tabBarLabel: 'Individual',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Parejas"
        component={hometodoparejas}
        options={{
          tabBarLabel: 'Parejas',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name='user-friends' color={color} size={19} type='font-awesome-5' />
          ),
        }}
      />
      <Tab.Screen
        name="Grupal"
        component={hometodogrupal}
        options={{
          tabBarLabel: 'Grupal',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-people" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;