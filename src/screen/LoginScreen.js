import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { serverBaseUrl } from '../utils/strings';
import { sendRequest } from '../utils/utils'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalSlide from '../components/ModalSlide';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = props => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const [isHidden, setIsHidden] = useState(true);


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
    props.navigation.navigate('Nevigator', {
      customerUserName: username,
    });
  };

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <ScrollView style={{}}>
        <LinearGradient
          colors={['#6CC3ED', '#4FA4E5', '#2D87B8', '#0080C8']}
          style={[{ height: 230, borderBottomLeftRadius: 60, borderBottomRightRadius: 60, shadowColor: "#000", elevation: 40, }]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
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
        </LinearGradient>
        <View style={{ left: 50, padding: 20, marginBottom: 20 }}>
          <Text style={{ fontSize: 60, fontWeight: "bold", color: "#555", textShadowColor: 'rgba(0, 0, 0, 0.8)', textShadowOffset: { width: -1, height: 1 }, textShadowRadius: 5 }}>Hello</Text>
          <Text style={{ color: "#AAA", fontSize: 18, marginBottom: 5, fontWeight: '500' }}>Sign in to your account</Text>
        </View>
        <View style={styles.inputView}>
          <FontAwesome name="user" size={20} color="#BBB" />
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor={"#BBB"}
            onChangeText={(username) => setUsername(username)}
          />
        </View>
        <View style={styles.inputView}>
          <FontAwesome name="lock" size={20} color="#BBB" />
          <TextInput
              style={styles.TextInput}
              placeholder="Password"
              secureTextEntry={isHidden}
              placeholderTextColor={"#BBB"}
              onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity style={{marginLeft: "auto"}} onPress={() => setIsHidden(!isHidden)}>
              <Icon
                name={isHidden ? 'eye-slash' : 'eye'}
                size={22}
                color="#BBB"
              />
            </TouchableOpacity>
        </View>
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
      </ScrollView>
    </View>
  );
}

export default LoginScreen


const styles = StyleSheet.create({
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
  inputView: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: "75%",
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "#777",
    elevation: 15,
    bottom: 30,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  TextInput: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 15,
  },
  forgot_button: {
    height: 30,
    bottom: 30,
    alignSelf: "center",
    marginTop: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: "#777",
  },
  linearGradient: {
    width: "50%",
    height: 50,
    borderRadius: 35,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
    elevation: 5,
    marginBottom: 10,
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