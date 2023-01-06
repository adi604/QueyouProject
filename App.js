import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Client/src/screen/HomeScreen'
import LoginScreen from './Client/src/screen/LoginScreen'
import SignUpScreen from './Client/src/screen/SignUpScreen'
import MainUserScreen from './Client/src/screen/MainUserScreen'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Oueyou" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="MainUserScreen" component={MainUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


