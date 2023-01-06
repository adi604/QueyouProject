import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

const SignUpScreen = props => {
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);

    return (
      <ImageBackground
        source={require('../../assets/back3.jpg')}
        style={styles.background}
      >
        <View>
            <Text style={styles.signUp}>
                Sign Up 
            </Text>
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
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
                /> 
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
                /> 
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.TextInput}
                placeholder="Repeat Password"
                onChangeText={(password) => setPassword(password)}
                /> 
            </View>
            <View style={styles.Checkbox}>
                <Checkbox
                    value={isSelected} 
                    onValueChange={setSelection}
                    title="Music"
                    isChecked={isSelected}
                />
                <Text style={styles.agree}>I agree to the Terms of Service</Text> 
            </View>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text> 
            </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }

  export default SignUpScreen


  const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%',
      backgroundColor: '#a9a9a9'
    },
    signUp:{
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: '37%',
      marginTop: '12%',
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
    Checkbox: {
        flexDirection: 'row',
        marginLeft: '20%',
        marginTop: '8%',
    },
    agree: {
        fontWeight: 'bold',
        letterSpacing: 0.5,
        marginLeft: '3%',
        fontSize: 15,
      },
      loginBtn: {
        marginTop: '8%',
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