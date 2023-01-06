import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = props => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onPressLogin = () => {
      props.navigation.navigate('Temp');
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
          <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Username"
                onChangeText={(username) => setUsername(username)}
                /> 
          </View>
          <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                /> 
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
            <Text style={styles.loginText}>LOGIN</Text> 
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  export default LoginScreen


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
      marginBottom: '8%',
    },
    inputView: {
        backgroundColor: '#ffffff',
        borderRadius: 30,
        width: "60%",
        height: 45,
        alignItems: "center",
        marginLeft: '21%',
        marginTop: '7%',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 17,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        marginLeft: '38%',
        marginTop: '4%',
        fontWeight: 'bold',
        letterSpacing: 0.5,
      },
      loginBtn: {
        width:"72%",
        borderRadius:25,
        marginLeft: '15%',
        height:45,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#9370db",
      },
      loginText: {
        fontWeight: 'bold',
      }
  });