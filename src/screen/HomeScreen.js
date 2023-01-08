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
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View>
        <Image
          source={require('../../assets/logo7.png')}
          style={styles.logo}
          resizeMode="contain">
        </Image>
        <Text style={styles.text}>Queyou</Text>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={[styles.client, styles.box]} onPress={() => { setIsClient(true); }}>
            <Text style={[{ fontSize: 25 }, isClient && styles.shadow]}>Client</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.provider, styles.box]} onPress={() => { setIsClient(false); }}>
            <Text style={[{ fontSize: 25 }, !isClient && styles.shadow]}>Provider</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
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
  logo: {
    width: 310,
    height: 310,
    marginLeft: '15%',
  },
  text: {
    fontSize: 30,
    marginLeft: '40%',
    color: '#ffffff',
    marginTop: '-14%',
    fontWeight: 'bold',
  },
  box: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  client: {
    fontSize: 25,
    left: 90,
    top: 20,
    padding: 20,
  },
  shadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  provider: {
    fontSize: 25,
    left: 110,
    top: 20,
    padding: 20,
  },
  squre: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.5,
    borderColor: 'black',
    borderWidth: 0.8,
    borderRadius: 50,
    left: 20,
    top: 30,
  },
});