import React from "react";
import {  createDrawerNavigator, IconComponent } from "@react-navigation/drawer";
import {DrawerActions} from '@react-navigation/native';
import { Icon, ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';

import SearchUserScreen from './SearchUserScreen'
import MyAppointment from '../components/MyAppointment'
import Reviews from '../components/Reviews'
import Settings from './Settings'
import temp_main_page from './main_temp_page'

const Drawer = createDrawerNavigator();

const Temp = props => {
  return (
    <Drawer.Navigator initialRouteName='SearchUserScreen'>
      <Drawer.Screen name="Search" component={SearchUserScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="My Appointment" component={MyAppointment} options={{headerShown:false}}/>
      <Drawer.Screen name="Reviews" component={Reviews} options={{headerShown:true}}/>
      <Drawer.Screen name="Settings" component={Settings} options={{headerShown:false, headerStyle: {backgroundColor: '#e7305b'}, headerTintColor: '#FFF', headerTitleStyle: {fontSize: 20, letterSpacing: 0.2,}}}/>
      <Drawer.Screen name="temp_main_page" component={temp_main_page} options={{headerShown:false, headerStyle: {backgroundColor: '#e7305b'}, headerTintColor: '#FFF', headerTitleStyle: {fontSize: 20, letterSpacing: 0.2,}}}/>
    </Drawer.Navigator>
  )
}

export default Temp;