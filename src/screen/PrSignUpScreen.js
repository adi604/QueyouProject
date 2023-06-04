import { AntDesign, Entypo, Feather, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'expo-checkbox';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GooglePlacesInput from '../components/GooglePlacesInput';
import ModalSlide from '../components/ModalSlide';
import * as strings from '../utils/strings';
import { sendRequest, validateSignUpProviderDetails } from '../utils/utils';
import CategoriesList from '../components/CategoriesList';
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

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [durationMeeting, setDurationMeeting] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");
  const [sunSelected, setSunSelected] = useState(false);
  const [monSelected, setMonSelected] = useState(false);
  const [tusSelected, setTusSelected] = useState(false);
  const [wedSelected, setWedSelected] = useState(false);
  const [turSelected, setTurSelected] = useState(false);
  const [friSelected, setFriSelected] = useState(false);
  const [sutSelected, setSutSelected] = useState(false);

  // location need to be object, and address need to be string.
  const [address, setAddress] = useState({});
  const [location, setLocation] = useState({});

  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isSelected, setSelection] = useState(false);

  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onPressSignUp = async () => {
    const signUpDetails = {
      isSelected: isSelected,
      username: username,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      category: category,
      description: description,
      openTime: openTime,
      closeTime: closeTime,
      durationMeeting: durationMeeting,
      maxDate: maxDate,
      password: password,
      repeatPassword: repeatPassword,
    }

    console.log(signUpDetails);

    const isValid = validateSignUpProviderDetails(signUpDetails,
      (errorMsg) => {
        setModalMessage(errorMsg);
        setModalVisible(true);
      }
    );
    if (!isValid) {
      return;
    }

    // check address \ location , and offdays.
    const offDays = [];
    if(sunSelected) { offDays.push(0); }
    if(monSelected) { offDays.push(1); }
    if(tusSelected) { offDays.push(2); }
    if(wedSelected) { offDays.push(3); }
    if(turSelected) { offDays.push(4); }
    if(friSelected) { offDays.push(5); }
    if(sutSelected) { offDays.push(6); }
    if(offDays.length == 7) {
      setModalMessage("You must work at least 1 day.");
      setModalVisible(true);
      return;
    }


    const body = {
      username: username,
      name: name,
      password: password,
      mail: email,
      phoneNumber: phoneNumber,
      category: category,
      description: description,
      openTime: openTime,
      closeTime: closeTime,
      durationMeeting: parseInt(durationMeeting),
      maxDate: maxDate,
      disabledDates: [],
      disabledDays: offDays,
      // address : ,
      // location: ,
    }
    const url = `${strings.serverBaseUrl}/users/signUpProviders`;
    const response = await sendRequest(url, 'POST', body);
    if (!response.ok) {
      setModalMessage(response.body.message);
      setModalVisible(true);
      return;
    }
    // login succeeded
    setUsername("");
    setName("");
    setEmail("");
    setPhoneNumber("");
    setCategory("");
    setDescription("");
    setOpenTime("");
    setCloseTime("");
    setDurationMeeting("");
    setMaxDate("");
    setDurationMeeting("");
    setDurationMeeting("");
    // ###
    setAddress({});
    setLocation("");
    //
    setPassword("");
    setRepeatPassword("");
    setSelection(false);
    setSunSelected(false);
    setMonSelected(false);
    setTusSelected(false);
    setWedSelected(false);
    setTurSelected(false);
    setFriSelected(false);
    setSutSelected(false);
    setImage(null);

    await AsyncStorage.setItem('token', response.body.token);
    props.navigation.navigate('PrLoginScreen');
  }


  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImage(result);
    }
  };

  const handleCategoryChanged = (value) => {
    setCategory(value);
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
                style={styles.TextInput}
                onChangeText={(username) => setUsername(username)}
              />
            </View>
        </View>


        <View style={{ flexDirection: "column", marginTop: 25 }}>
            <View style={{ flexDirection: "row", marginLeft: "10%", }}>
              <AntDesign name="user" size={26} color="#888" />
              <Text style={styles.title}>Name</Text>
            </View>
            <View style={{ marginTop: 10, }}>
              <TextInput
                style={styles.TextInput}
                onChangeText={(name) => setName(name)}
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
              style={styles.TextInput}
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <MaterialIcons name="category" size={22} color="#888" />
            <Text style={styles.title}>Category</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <CategoriesList handleCategoryChanged={handleCategoryChanged} />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <MaterialIcons name="description" size={22} color="#888" />
            <Text style={styles.title}>Description</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(description) => setDescription(description)}
            />
          </View>
        </View>


        <View style={{ flexDirection: "column", marginTop: 25 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Entypo name="time-slot" size={22} color="#888" />
            <Text style={styles.title}>Working time</Text>
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 11 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Text style={[styles.title, {fontSize:16}]}>Open Time</Text>
          </View>
          <View style={{ marginTop: 7, }}>
            <TextInput
              style={styles.TextInput}
              placeholder='HH:MM'
              onChangeText={(openTime) => setOpenTime(openTime)}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 11 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Text style={[styles.title, {fontSize:16}]}>Close Time</Text>
          </View>
          <View style={{ marginTop: 7, }}>
            <TextInput
              style={styles.TextInput}
              placeholder='HH:MM'
              onChangeText={(closeTime) => setCloseTime(closeTime)}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 11 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Text style={[styles.title, {fontSize:16}]}>Duration Meeting</Text>
          </View>
          <View style={{ marginTop: 7, }}>
            <TextInput
              style={styles.TextInput}
              placeholder='In Minutes'
              onChangeText={(durationMeeting) => setDurationMeeting(durationMeeting)}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 11 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Text style={[styles.title, {fontSize:16}]}>Max Date for booking</Text>
          </View>
          <View style={{ marginTop: 7, }}>
            <TextInput
              style={styles.TextInput}
              placeholder='YYYY-MM-DD'
              onChangeText={(maxDate) => setMaxDate(maxDate)}
            />
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 11 }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Text style={[styles.title, {fontSize:16}]}>Off Days</Text>
          </View>
          <View style={{ flexDirection: "row", alignSelf: "center", }}>

            <View style={[styles.daysCheckbox, {flexDirection: "column",}]}>
              <Checkbox
                value={sunSelected}
                isChecked={sunSelected}
                onValueChange={() => setSunSelected(!sunSelected)}
              />
              <Text style={styles.daysTxt}>Sun</Text>
            </View>
            <View style={[styles.daysCheckbox, {flexDirection: "column",}]}>
              <Checkbox
                value={monSelected}
                isChecked={monSelected}
                onValueChange={() => setMonSelected(!monSelected)}
              />
              <Text style={styles.daysTxt}>Mon</Text>
            </View>
            <View style={[styles.daysCheckbox, {flexDirection: "column",}]}>
              <Checkbox
                value={tusSelected}
                isChecked={tusSelected}
                onValueChange={() => setTusSelected(!tusSelected)}
              />
              <Text style={styles.daysTxt}>Tus</Text>
            </View>
            <View style={[styles.daysCheckbox, {flexDirection: "column",}]}>
              <Checkbox
                value={wedSelected}
                isChecked={wedSelected}
                onValueChange={() => setWedSelected(!wedSelected)}
              />
              <Text style={styles.daysTxt}>Wed</Text>
            </View>
            <View style={[styles.daysCheckbox, {flexDirection: "column",}]}>
              <Checkbox
                value={turSelected}
                isChecked={turSelected}
                onValueChange={() => setTurSelected(!turSelected)}
              />
              <Text style={styles.daysTxt}>Tur</Text>
            </View>
            <View style={[styles.daysCheckbox, {flexDirection: "column",}]}>
              <Checkbox
                value={friSelected}
                isChecked={friSelected}
                onValueChange={() => setFriSelected(!friSelected)}
              />
              <Text style={styles.daysTxt}>Fri</Text>
            </View>
            <View style={[styles.daysCheckbox, {flexDirection: "column",}]}>
              <Checkbox
                value={sutSelected}
                isChecked={sutSelected}
                onValueChange={() => setSutSelected(!sutSelected)}
              />
              <Text style={styles.daysTxt}>Sut</Text>
            </View>

          </View>
        </View>


        <View style={{ flexDirection: "column", marginTop: 25}}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Ionicons name="location-outline" size={25} color="#888" />
            <Text style={styles.title}>Address</Text>
          </View>
          <View style={{ marginTop: 10,}}>
            <GooglePlacesInput setAddress={setAddress} />
          </View>
        </View>

        <View style={{ flexDirection: "column", }}>
          <View style={{ flexDirection: "row", marginLeft: "10%", }}>
            <Feather name="lock" size={24} color="#888" />
            <Text style={styles.title}>Password</Text>
          </View>
          <View style={{ marginTop: 10, }}>
            <TextInput
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
              style={styles.TextInput}
              onChangeText={(repeatPassword) => setRepeatPassword(repeatPassword)}
            />
          </View>
        </View>

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
    fontFamily: 'Montserrat_600SemiBold_Italic',
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
    color: "#333",
    padding: 10,
    fontSize: 16,
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
  daysCheckbox: {
    alignSelf: "center",
    marginTop: 7,
    marginLeft: 15,
  },
  agree: {
    fontWeight: 'bold',
    marginLeft: '3%',
    color: "#666",
    fontSize: 15,
  },
  daysTxt: {
    fontWeight: 'bold',
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