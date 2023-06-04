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
        tabBarStyle: { backgroundColor: "#FFF", borderRadius: 50, height: 70, bottom: 5, paddingTop: 5, paddingHorizontal: 30, position: "absolute" },
        tabBarItemStyle: { borderRadius: 50, },
        tabBarHideOnKeyboard: true
      }}

    >

    <Tab.Screen
      name="Search"
      component={SearchUserScreen}
      initialParams={props.route.params}
      options={{
        tabBarLabel: 'Home',
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons style={{ bottom: 2 }} name="add-circle-sharp" size={60} color="#4FA4E5" />
        ),
        headerShown: false,

      }} />

      <Tab.Screen
        name="My_Appointments"
        component={MyAppointment}
        initialParams={props.route.params}
        options={{
          tabBarLabel: 'Appointments',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconColor = focused ? '#000' : '#999';
            return <AntDesign name="calendar" size={32} color={iconColor} />;
          },
          headerShown: false,

        }} />

      <Tab.Screen
        name="Settings"
        component={Settings}
        initialParams={props.route.params}
        options={{
          tabBarLabel: 'Settings',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconColor = focused ? '#000' : '#999';
            return <AntDesign name="setting" size={32} color={iconColor} />;
          },
          headerShown: false,
        }} />

        {
          <Tab.Screen
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
                  <Ionicons style={{ left: 10 }} name="arrow-back" size={24} color="white" />
                </TouchableOpacity>

              ),
            }} />
        }

    </Tab.Navigator>
  )
}

export default Nevigator;