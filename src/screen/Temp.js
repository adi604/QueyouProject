import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SearchUserScreen from './SearchUserScreen'
import MyAppointment from '../components/MyAppointment'
import Reviews from '../components/Reviews'

const Drawer = createDrawerNavigator();

const Temp = props => {
  return (
    <Drawer.Navigator initialRouteName='MainUserScreen'>
      <Drawer.Screen name="Search" component={SearchUserScreen} />
      <Drawer.Screen name="My Appointment" component={MyAppointment} />
      <Drawer.Screen name="Reviews" component={Reviews} />
    </Drawer.Navigator>
  )
}

export default Temp;