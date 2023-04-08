import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { sendRequest, validateSignUpDetails } from '../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as strings from '../utils/strings';
import ModalSlide from '../components/ModalSlide';

const SignUpScreen = props => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');


  const onPressSignUp = async () => {
    const signUpDetails = {
      username: username,
      email: email,
      password: password,
      repeatPassword: repeatPassword
    }

    const isValid = validateSignUpDetails(signUpDetails,
      (errorMsg) => {
        setModalMessage(errorMsg);
        setModalVisible(true);
      }
    );
    if (!isValid) {
      return;
    }

    const body = {
      username: username,
      password: password,
      mail: email
    }
    const url = `${strings.serverBaseUrl}/users/signUpCustomers`;
    const response = await sendRequest(url, 'POST', body);
    if (!response.ok) {
      setModalMessage(response.body.message);
      setModalVisible(true);
      return;
    }
    // login succeeded
    await AsyncStorage.setItem('token', response.body.token);
    props.navigation.navigate('Nevigator');
  }

  return (
    <ImageBackground
      source={require('../../assets/back3.jpg')}
      style={styles.background}
    >
      <View>
        <ModalSlide
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          message={modalMessage}
          buttonText="OK"
        />
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
            onChangeText={(repeatPassword) => setRepeatPassword(repeatPassword)}
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
        <TouchableOpacity style={styles.signBtn} onPress={onPressSignUp}>
          <Text style={styles.signBtnText}>Sign Up</Text>
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
  signUp: {
    fontSize: 50,
    fontWeight: 'bold',
    alignSelf: "center",
    marginTop: '15%',
    marginBottom: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    color: "white",
  },
  inputView: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignSelf: "center",
    width: "70%",
    height: 45,
    alignItems: "center",
    marginTop: '7%',
    shadowColor: "#000",
    elevation: 10,
  },
  TextInput: {
    height: 50,
    flex: 1,
    fontWeight: 'bold',
    fontSize: 17,
  },
  Checkbox: {
    flexDirection: 'row',
    alignSelf: "center",
    marginTop: '8%',
  },
  agree: {
    fontWeight: 'bold',
    marginLeft: '3%',
    color: "#222",
    fontSize: 15,
  },
  signBtn: {
    marginTop: '12%',
    width: "55%",
    borderRadius: 45,
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#9370db",
    shadowColor: "#000",
    elevation: 10,
  },
  signBtnText: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  }
});