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
import Nevigator from './src/screen/Nevigator'
import AvailableAppointments from './src/screen/AvailableAppointments'
import PrAppointments from './src/screen/PrAppointments'
import CalendarPickerScreen from './src/screen/CalendarPickerScreen'
import SearchUserScreen from './src/screen/SearchUserScreen'
import Reviews from './src/components/Reviews';
import PrNevigator from './src/screen/PrNevigator'
import AppointmentDetails from './src/screen/AppointmentDetails'

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
        <Stack.Screen name="Nevigator" component={Nevigator} />
        <Stack.Screen name="AvailableAppointments" component={AvailableAppointments} />
        <Stack.Screen name="PrAppointments" component={PrAppointments} />
        <Stack.Screen name="CalendarPickerScreen" component={CalendarPickerScreen} />
        <Stack.Screen name="SearchUserScreen" component={Nevigator} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="PrNevigator" component={PrNevigator} />
        <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;


