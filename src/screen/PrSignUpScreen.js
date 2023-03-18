import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';

const PrSignUpScreen = props => {

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
          Provider Sign Up
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
        <TouchableOpacity style={styles.signBtn}>
          <Text style={styles.signBtnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default PrSignUpScreen


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#a9a9a9'
  },
  signUp: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: '22%',
    marginTop: '18%',
    marginBottom: '3%',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "white",
  },
  inputView: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: "60%",
    height: 45,
    alignItems: "center",
    marginLeft: '19%',
    marginTop: '8%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
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
  signBtn: {
    marginTop: '12%',
    width: "62%",
    borderRadius: 45,
    marginLeft: '19%',
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9370db",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  signBtnText: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 20,
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  }
});