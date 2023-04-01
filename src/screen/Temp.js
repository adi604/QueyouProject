import React from "react";
import {  createDrawerNavigator, IconComponent } from "@react-navigation/drawer";
import {DrawerActions} from '@react-navigation/native';
import { Icon, ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchUserScreen from './SearchUserScreen'
import MyAppointment from '../components/MyAppointment'
import Reviews from '../components/Reviews'
import Settings from './Settings'

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();


const Temp = props => {
  return (
    <Tab.Navigator initialRouteName='SearchUserScreen'>
      <Tab.Screen name="Search" component={SearchUserScreen} options={{headerShown:false}}/>
      <Tab.Screen name="My Appointments" component={MyAppointment} options={{headerShown:false}}/>
      <Tab.Screen name="Reviews" component={Reviews} options={{headerShown:true}}/>
      <Tab.Screen name="Settings" component={Settings} options={{headerShown:false, headerStyle: {backgroundColor: '#e7305b'}, headerTintColor: '#FFF', headerTitleStyle: {fontSize: 20, letterSpacing: 0.2,}}}/>
    </Tab.Navigator>
  )
}

export default Temp;