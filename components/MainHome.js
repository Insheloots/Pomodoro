import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import { Ionicons } from '@expo/vector-icons';

import hometodo from './To Do List/hometodo';
import rHome from './Recomendaciones/rHome';
import music from './Music/music';
import PretestPostestHome from './Cuestionarios/rPretestPostestHome';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="hometodo"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={hometodo}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-albums" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="rHome"
        component={rHome}
        options={{
          tabBarLabel: 'Actividades',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-pulse" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Musica"
        component={music}
        options={{
          tabBarLabel: 'Música',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-play-circle" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="PretestPostestHome"
        component={PretestPostestHome}
        options={{
          tabBarLabel: 'Cuestionarios',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-aperture" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;