import { StyleSheet, Text, ScrollView,Pressable, Button, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { sendRequest, validateSignUpCustomerDetails } from '../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as strings from '../utils/strings';
import ModalSlide from '../components/ModalSlide';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

const SignUpScreen = props => {

  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
});

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  //const [image, setImage] = useState(null);

  const onPressSignUp = async () => {
    const signUpDetails = {
      isSelected: isSelected,
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      repeatPassword: repeatPassword,
    }

    const isValid = validateSignUpCustomerDetails(signUpDetails,
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
      firstName: firstName,
      lastName: lastName,
      mail: email,
      phoneNumber: phoneNumber,
    }
    const url = `${strings.serverBaseUrl}/users/signUpCustomers`;
    const response = await sendRequest(url, 'POST', body);
    if (!response.ok) {
      setModalMessage(response.body.message);
      setModalVisible(true);
      return;
    }
    // login succeeded
    setUsername("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setRepeatPassword("");
    setSelection(false);
    //await AsyncStorage.setItem('token', response.body.token);
    props.navigation.navigate('Oueyou');
  }


  /*
  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      setImage(result);
    }
  };
  */

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={{ backgroundColor: "#FFF", height: "100%" }}>
      <LinearGradient
        colors={['#6CC3ED', '#4FA4E5', '#2D87B8', '#0080C8']}
        style={[{ height: 160, }]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }} >
        <ModalSlide
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          message={modalMessage}
          buttonText="OK"
        />
        <Text style={styles.signUp}>
          Sign Up
        </Text>
      </LinearGradient>

      <View style={{ backgroundColor: "#FFF", marginTop: -15, width: "94%", alignSelf: "center", borderRadius: 15, }}>
        
        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <AntDesign name="user" size={26} color="#888" />
            <Text style={styles.title}>Username</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <TextInput
            value={username}
              style={styles.TextInput}
              onChangeText={(username) => setUsername(username)}
            />
          </View>
        </View>
        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <AntDesign name="user" size={26} color="#888" />
            <Text style={styles.title}>First Name</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <TextInput
            value={firstName}
              style={styles.TextInput}
              onChangeText={(firstName) => setFirstName(firstName)}
            />
          </View>
        </View>
        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <AntDesign name="user" size={26} color="#888" />
            <Text style={styles.title}>Last Name</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <TextInput
            value={lastName}
              style={styles.TextInput}
              onChangeText={(lastName) => setLastName(lastName)}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <MaterialCommunityIcons name="email-edit-outline" size={24} color="#888" />
            <Text style={styles.title}>Email</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <TextInput
            value={email}
              style={styles.TextInput}
              onChangeText={(email) => setEmail(email)}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Feather name="phone-call" size={22} color="#888" />
            <Text style={styles.title}>Phone Number</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <TextInput
            value={phoneNumber}
              style={styles.TextInput}
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Feather name="lock" size={24} color="#888" />
            <Text style={styles.title}>Password</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <TextInput
            value={password}
              style={styles.TextInput}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Feather name="lock" size={24} color="#888" />
            <Text style={styles.title}>Repeat Password</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <TextInput
            value={repeatPassword}
              style={styles.TextInput}
              onChangeText={(repeatPassword) => setRepeatPassword(repeatPassword)}
            />
          </View>
        </View>

        {/*
          <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <SimpleLineIcons name="picture" size={22} color="#888" />
            <Text style={styles.title}>Profile Picture</Text>
          </View>
          <View style={{ marginTop: 20, }}>
            <Pressable style={styles.ImageInput} title="Choose Image" onPress={chooseImage} >
            <AntDesign name="clouduploado" size={30} color="white" />
            </Pressable>
          </View>
        </View>
        */}

        <View style={styles.Checkbox}>
          <Checkbox
            value={isSelected}
            onValueChange={() => setSelection(!isSelected)}
            title="agreement"
            isChecked={isSelected}
          />
          <Text style={styles.agree}>I agree to the Terms of Service</Text>
        </View>

        <TouchableOpacity style={styles.signBtn} onPress={onPressSignUp}>
          <Text style={styles.signBtnText}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

export default SignUpScreen


const styles = StyleSheet.create({
  signUp: {
    fontSize: 50,
    fontFamily: 'Montserrat_700Bold_Italic',
    alignSelf: "center",
    marginTop: '12%',
    marginBottom: '8%',
    color: "white",
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    color: "#888",
    left: 10,
  },
  TextInput: {
    backgroundColor: "#FFF",
    width: "80%",
    alignSelf: "center",
    borderRadius: 10,
    height: 45,
    shadowColor: "#000",
    elevation: 10,
    paddingLeft: 10,
  },
  ImageInput: {
    backgroundColor: "#4FA4E5",
    width: "20%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    height: 45,
    shadowColor: "#000",
    elevation: 10,
  },
  Checkbox: {
    flexDirection: 'row',
    alignSelf: "center",
    marginTop: 30,
  },
  agree: {
    fontWeight: 'bold',
    marginLeft: '3%',
    color: "#666",
    fontSize: 15,
  },
  signBtn: {
    width: "55%",
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 30,
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#4FA4E5",
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