import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <ImageBackground
    source={require('./assets/back3.jpg')}
      style={styles.background}
    >
      <View>
        <Image
          source={require('./assets/logo7.png')}
          style={styles.logo}
          resizeMode="contain">
        </Image>
        <Text style={styles.text}>Queyou</Text>
        <TouchableOpacity 
          onPress={Alert.alert("Completed Sign Up")}
        >
          <Text style={styles.signup}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={Alert.alert("Completed Login!")}
        >
          <Text style={styles.login}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Oueyou" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#a9a9a9'
  },
  logo:{
    width: 310,
    height: 310,
    marginLeft: '15%',
  },
  text: {
    color: 'white',
    fontSize: 26,
    marginLeft: '40%',
    color: '#ffffff',
    marginTop: '-14%',
    fontWeight: 'bold',
  },
  signup: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: "65%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '19%',
    padding: "1%",
    marginTop: '15%',
    fontSize:  25,
  },
  login: {
    backgroundColor: '#3A59FF',
    color: 'white',
    width: "65%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '19%',
    padding: "1%",
    fontSize:  25,
    marginTop: '10%'
  }
});