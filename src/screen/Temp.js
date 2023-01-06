import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SearchUserScreen from './SearchUserScreen'
import MyQueues from '../components/MyQueues'

const Drawer = createDrawerNavigator();

const Temp = props => {
  return (
    <Drawer.Navigator initialRouteName='MainUserScreen'>
      <Drawer.Screen name="Search" component={SearchUserScreen} />
      <Drawer.Screen name="My Queues" component={MyQueues} />
    </Drawer.Navigator>
  )
}

export default Temp;