import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { serverBaseUrl } from '../utils/strings';
import { sendRequest } from '../utils/utils'
import ModalSlide from '../components/ModalSlide';

const PrLoginScreen = props => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);


  const onPressLogin = async () => {
    props.navigation.navigate('PrNevigator');
    const body = {
      username: username,
      password: password
    }
    const url = `${serverBaseUrl}/users/loginProviders`;
    const response = await sendRequest(url, 'POST', body);
    if(!response.ok) {
      setModalVisible(true);
      return;
    }
    // login succeeded
    await AsyncStorage.setItem('token', response.body.token);
    props.navigation.navigate('PrNevigator');
  };

  return (
    <LinearGradient
      colors={['#0066CC', '#66B2FF', '#99CCFF', '#DFECFF']}
      style={[{ height: "100%" }]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View>
      <ModalSlide 
        modalVisible = {modalVisible}
        setModalVisible = {setModalVisible}
        message = "Invalid username or password, please try again."
        buttonText = "OK"
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
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Provider Name"
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
          colors={['#9370db', '#CC99FF', '#E5CCFF']}
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
  );
}

export default PrLoginScreen


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
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
    marginTop: 22,
    bottom: 30,
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
  forgot_button: {
    height: 30,
    bottom: 38,
    marginLeft: '38%',
    marginTop: '4%',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  linearGradient: {
    bottom: 30,
    width: "62%",
    marginLeft: '21%',
    height: 50,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
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