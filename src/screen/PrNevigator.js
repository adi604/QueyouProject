import React from "react";
import { createDrawerNavigator, IconComponent } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

import Settings from './Settings'
import main_temp_page from './main_temp_page'
import PrAppointments from './PrAppointments'

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();


const Nevigator = props => {
  return (
    <Tab.Navigator initialRouteName='PrAppointments'
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarStyle: { backgroundColor: "#FFF", borderRadius: 50, height: 70, bottom: 5, paddingTop: 5, paddingHorizontal: 30, position: "absolute" },
        tabBarItemStyle: { borderRadius: 50, },
        tabBarHideOnKeyboard: true
      }}
    >
      <Tab.Screen
        name="Appointments"
        component={PrAppointments}
        initialParams={props.route.params}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconColor = focused ? '#000' : '#999';
            return <AntDesign name="home" size={32} color={iconColor} />;
          },
          headerShown: false,
        }} />

        <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconColor = focused ? '#000' : '#999';
            return <AntDesign name="setting" size={32} color={iconColor} />;
          },
          headerShown: false,
        }} />


    </Tab.Navigator>
  )
}

export default Nevigator;