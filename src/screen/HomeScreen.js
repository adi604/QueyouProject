import { Dimensions, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import HomeClient from "../components/HomeClient"
import HomeProvider from "../components/HomeProvider"



const HomeScreen = props => {
    
    const [isClient, setIsClient] = useState(true);

    const onPressLogin = () => {
        props.navigation.navigate('LoginScreen');
    };

    const onPressSignUp = () => {
        props.navigation.navigate('SignUpScreen');
    };


    return (
      <ImageBackground
      source={require('../../assets/back3.jpg')}
        style={styles.background}
      >
        <View>
          <Image
            source={require('../../assets/logo7.png')}
            style={styles.logo}
            resizeMode="contain">
          </Image>
          <Text style={styles.text}>Queyou</Text>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={[styles.client]} onPress={() => { setIsClient(true); }}>
              <Text style= {[{fontSize: 25}, isClient && styles.shadow]}>Client</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.provider]} onPress={() => { setIsClient(false); }}>
              <Text style= {[{fontSize: 25}, !isClient && styles.shadow]}>Provider</Text>
            </TouchableOpacity>
          </View>

          <View>
            {(isClient) ? <HomeClient navigation={props.navigation} /> : <HomeProvider navigation={props.navigation} />}
          </View>
        </View>
      </ImageBackground>
    );
  }

  export default HomeScreen


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
      fontSize: 26,
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
      textShadowColor: 'rgba(0, 50, 50, 0.9)',
      textShadowOffset: {width: -1, height: 1},
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