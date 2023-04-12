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
    <Tab.Navigator initialRouteName='Search'
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarStyle: { backgroundColor: "#FFF", borderRadius: 50, height: 70, bottom: 5, paddingTop: 5, paddingHorizontal: 30, },
        tabBarItemStyle: { borderRadius: 50, },
      }}
    >
      <Tab.Screen
        name="My_Appointments"
        component={MyAppointment}
        options={{
          tabBarLabel: 'Appointments',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            <AntDesign name="calendar" size={35} color="#3F9FCF" />
          },
          headerShown: false,

        }} />
      <Tab.Screen
        name="Search"
        component={SearchUserScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons style={{ bottom: 2 }} name="add-circle-sharp" size={60} color="#3F9FCF" />
          ),
          headerShown: false,

        }} />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            <AntDesign name="setting" size={35} color="3F9FCF" />
          },
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
      {/* <Tab.Screen
        name="Appointment Details"
        component={main_temp_page}
        options={{
          tabBarLabel: 'main_temp_page',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={30} color="#AAA" />),
          headerShown: false,
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
        }} /> */}
    </Tab.Navigator>
  )
}

export default Nevigator;