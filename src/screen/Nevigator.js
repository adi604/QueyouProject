import React from "react";
import { createDrawerNavigator, IconComponent } from "@react-navigation/drawer";
import { DrawerActions } from '@react-navigation/native';
import { Icon, ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Fontisto } from '@expo/vector-icons';

import SearchUserScreen from './SearchUserScreen'
import MyAppointment from '../components/MyAppointment'
import Reviews from '../components/Reviews'
import Settings from './Settings'
import main_temp_page from './main_temp_page'

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();


const Nevigator = props => {
  return (
    <Tab.Navigator initialRouteName='SearchUserScreen'
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarStyle: { backgroundColor: "#2D87B8", borderRightWidth: 2, borderrRightColor: "white" },
        tabBarLabelStyle: { color: "#fff" },

      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchUserScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { fontSize: 12, color: 'white' },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="white" />
          ),
          headerShown: false,
        }} />
      <Tab.Screen
        name="My Appointments"
        component={MyAppointment}
        options={{
          tabBarLabel: 'Appointments',
          tabBarLabelStyle: { fontSize: 12, color: 'white' },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={24} color="white" />
          ),
          headerShown: false,
        }} />
      
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarLabelStyle: { fontSize: 12, color: 'white' },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={24} color="white" />),
          headerShown: false,
        }} />

      <Tab.Screen
        name="main_temp_page"
        component={main_temp_page}
        options={{
          tabBarLabel: 'main_temp_page',
          tabBarLabelStyle: { fontSize: 12, color: 'white' },
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={24} color="white" />),
          headerShown: false,
        }} />
    </Tab.Navigator>
  )
}

export default Nevigator;