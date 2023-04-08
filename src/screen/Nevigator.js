import React from "react";
import { createDrawerNavigator, IconComponent } from "@react-navigation/drawer";
import { DrawerActions } from '@react-navigation/native';
import { Icon, ScrollView, StyleSheet, Text, Button, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import SearchUserScreen from './SearchUserScreen'
import MyAppointment from './MyAppointment'
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
        tabBarActiveBackgroundColor: "#3F9FCF"
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchUserScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { fontSize: 12, color: 'white' },
          tabBarShowLabel: false,
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
          tabBarShowLabel: false,
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
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={24} color="white" />),
          headerShown: false,
        }} />

      <Tab.Screen
        name="Appointment Details"
        component={main_temp_page}
        options={{
          tabBarLabel: 'main_temp_page',
          tabBarLabelStyle: { fontSize: 12, color: 'white' },
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={24} color="white" />),
          headerShown: true,
          headerStyle: {
            backgroundColor: '#2D87B8',
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
              <Ionicons style={{left: 10}} name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

          ),
        }} />
    </Tab.Navigator>
  )
}

export default Nevigator;