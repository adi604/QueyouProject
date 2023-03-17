import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import HomeClient from "../components/HomeClient"
import HomeProvider from "../components/HomeProvider"
import { LinearGradient } from 'expo-linear-gradient';



const HomeScreen = props => {

  const [isClient, setIsClient] = useState(true);

  const onPressLogin = () => {
    props.navigation.navigate('LoginScreen');
  };

  const onPressSignUp = () => {
    props.navigation.navigate('SignUpScreen');
  };


  return (
    <LinearGradient
      colors={['#0066CC', '#66B2FF', '#99CCFF', '#DFECFF']}
      style={[{ height: "100%" }]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View>
        <Image
          source={require('../../assets/logo7.png')}
          style={styles.logo}
          resizeMode="contain">
        </Image>
        <Image
          source={require('../../assets/back1.png')}
          style={styles.queyou}
          resizeMode="contain">
        </Image>

        <View style={{ flexDirection: 'row', bottom: 110, }}>
          <TouchableOpacity style={[styles.client]} onPress={() => { setIsClient(true); }}>
            <Text style={[{ fontSize: 25, color: 'white'}, isClient && styles.shadow]}>Client</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.provider]} onPress={() => { setIsClient(false); }}>
            <Text style={[{ fontSize: 25 ,color: 'white', }, !isClient && styles.shadow]}>Provider</Text>
          </TouchableOpacity>
        </View>

        <View style={{bottom: 140,}}>
          {(isClient) ? <HomeClient navigation={props.navigation} /> : <HomeProvider navigation={props.navigation} />}
        </View>
      </View>
    </LinearGradient>
  );
}

export default HomeScreen


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#a9a9a9'
  },
  welcome: {
    fontSize: 50,
    color: '#dcdcdc',
    letterSpacing: 5,
    bottom: 70,
    left: 50,
  },
  logo: {
    bottom: 20,
    width: 310,
    height: 310,
    marginLeft: '15%',
  },
  queyou: {
    bottom: 70,
    width: 310,
    height: 140,
    marginLeft: '15%',
  },
  text: {
    fontSize: 30,
    marginLeft: '40%',
    color: '#ffffff',
    marginTop: '-14%',
    fontWeight: 'bold',
  },
  client: {
    fontSize: 25,
    left: 90,
    top: 20,
    padding: 20,
  },
  shadow: {
    textShadowColor: 'rgba(255, 255, 255, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  provider: {
    fontSize: 25,
    left: 110,
    top: 20,
    padding: 20,
  },
});