import React from "react";
import {  createDrawerNavigator, IconComponent } from "@react-navigation/drawer";
import {DrawerActions} from '@react-navigation/native';
import { Icon, ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';

import SearchUserScreen from './SearchUserScreen'
import MyAppointment from '../components/MyAppointment'
import Reviews from '../components/Reviews'

const Drawer = createDrawerNavigator();

const Temp = props => {
  return (
    <Drawer.Navigator initialRouteName='MainUserScreen'>
      <Drawer.Screen name="Search" component={SearchUserScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="My Appointment" component={MyAppointment} options={{headerShown:false}}/>
      <Drawer.Screen name="Reviews" component={Reviews} options={{headerShown:false}}/>
    </Drawer.Navigator>
  )
}

export default Temp;