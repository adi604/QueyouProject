import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomeScreen from './src/screen/HomeScreen'
import LoginScreen from './src/screen/LoginScreen'
import PrLoginScreen from './src/screen/PrLoginScreen'
import SignUpScreen from './src/screen/SignUpScreen'
import PrSignUpScreen from './src/screen/PrSignUpScreen'
import MainUserScreen from './src/screen/SearchUserScreen'
import Temp from './src/screen/Temp'
import AvailableAppointments from './src/screen/AvailableAppointments'
import PrAppointments from './src/screen/PrAppointments'
import SearchUserScreen from './src/screen/SearchUserScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Oueyou" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="PrLoginScreen" component={PrLoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="PrSignUpScreen" component={PrSignUpScreen} />
        <Stack.Screen name="Temp" component={Temp} />
        <Stack.Screen name="AvailableAppointments" component={AvailableAppointments} />
        <Stack.Screen name="PrAppointments" component={PrAppointments} />
        <Stack.Screen name="SearchUserScreen" component={Temp} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;


