import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { serverBaseUrl } from '../utils/strings';
import { sendRequest } from '../utils/utils'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalSlide from '../components/ModalSlide';
const LoginScreen = props => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const onPressLogin = async () => {
    const body = {
      username: username,
      password: password
    }
    const url = `${serverBaseUrl}/users/loginCustomers`;
    const response = await sendRequest(url, 'POST', body);
    if (!response.ok) {
      setModalVisible(true);
      return;
    }
    // login succeeded
    await AsyncStorage.setItem('token', response.body.token);
    props.navigation.navigate('Nevigator');
  };

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <LinearGradient
        colors={['#6CC3ED', '#4FA4E5', '#2D87B8', '#0080C8']}
        style={[{ height: "38%", borderBottomLeftRadius: 60, borderBottomRightRadius: 60, shadowColor: "#000", elevation: 40, }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View>
          <ModalSlide
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            message="Invalid username or password, please try again."
            buttonText="OK"
          />
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
          <View style={{ marginTop: -10, left: 50, padding: 20 }}>
            <Text style={{ fontSize: 60, fontWeight: "bold", color: "#555", textShadowColor: 'rgba(0, 0, 0, 0.8)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 5 }}>Hello</Text>
            <Text style={{ color: "#AAA", fontSize: 18, bottom: 10, fontWeight: '500' }}>Sign up to your account</Text>
          </View>
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
          <LinearGradient
            colors={['#6CC3ED', '#4FA4E5', '#2D87B8', '#0080C8']}
            start={{ x: 0, y: -1 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.linearGradient}
          >
            <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </LinearGradient>

        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default LoginScreen


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 200,
    height: 150,
    alignSelf: 'center',
  },
  queyou: {
    bottom: 20,
    width: 250,
    height: 100,
    alignSelf: 'center',
  },
  text: {
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  inputView: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: "75%",
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 22,
    shadowColor: "#777",
    elevation: 20,
    bottom: 30
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
    bottom: 38,
    marginLeft: '38%',
    marginTop: '4%',
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: "#777",
  },
  linearGradient: {
    width: "55%",
    height: 50,
    borderRadius: 35,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
    elevation: 50,
  },
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 20,
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  }
});