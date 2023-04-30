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
import AppointmentDetails from './AppointmentDetails'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const ADNevigator = props => {
  return (
    <Tab.Navigator initialRouteName='AppointmentDetails'
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Appointment Details"
        component={AppointmentDetails}
        initialParams={props.route.params}
        options={{
          tabBarLabel: 'AppointmentDetails',
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

export default ADNevigator;