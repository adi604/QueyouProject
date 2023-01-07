import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './src/screen/HomeScreen'
import LoginScreen from './src/screen/LoginScreen'
import SignUpScreen from './src/screen/SignUpScreen'
import MainUserScreen from './src/screen/SearchUserScreen'
import Temp from './src/screen/Temp'
import AvailableAppointments from './src/screen/AvailableAppointments'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Oueyou" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Temp" component={Temp} />
        <Stack.Screen name="AvailableAppointments" component={AvailableAppointments} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;


