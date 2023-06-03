import { ScrollView, TouchableOpacity, TextInput, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, Feather, Fontisto, MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import ModalSlide from '../components/ModalSlide';
import { serverBaseUrl } from '../utils/strings';
import { sendRequest } from '../utils/utils'
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

const PrSettings = props => {

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

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [maxDate, setMaxDate] = useState("");
  const [openTime, setOpenTime] = useState("");
  const [closeTime, setCloseTime] = useState("");

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const onChangePhone = (e) => {
    setPhone(e.nativeEvent.text);
  };
  const onChangeEmail = (e) => {
    setEmail(e.nativeEvent.text);
  };
  const onChangeMaxDate = (e) => {
    setMaxDate(e.nativeEvent.text);
  };
  const onChangeOpenTime = (e) => {
    setOpenTime(e.nativeEvent.text);
  };
  const onChangeCloseTime = (e) => {
    setCloseTime(e.nativeEvent.text);
  };

  async function onPressSave () {
    if ((phone != "") || (email != "")) {
        const body = {}
        if (phone != "") {
          body.phoneNumber = phone
        }
        if (email != "") {
          body.mail = email
        }
        if (maxDate != "") {
          body.maxDate = maxDate
        }
        if (openTime != "") {
          body.openTime = openTime
        }
        if (closeTime != "") {
          body.closeTime = closeTime
        }
        const url = `${serverBaseUrl}/providers`;
        console.log(body);
        const response = await sendRequest(url, 'PATCH', body);
        if(!response.ok) {
            console.log("Update Failed !");
        } else {
            // update succeeded
            console.log("Update Succeeded !");
            setPhone("");
            setEmail("");
            setMaxDate("");
            setOpenTime("");
            setCloseTime("");
        }
    }
};


  return (
    <ScrollView style={[{ backgroundColor: "white", top: 25, height: "100%", marginBottom: 30, }]}>
      <View style={{
        shadowColor: '#000',
        elevation: 45,
      }}>
        <LinearGradient
          colors={['#4FA4E5', '#64b5f6']}
          style={{
            width: '100%', height: 250, padding: 15, bottom: 25,
            shadowColor: '#000',
            elevation: 50,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>Account Information</Text>
        </LinearGradient>
      </View>

      <View style={styles.box}>
        <View style={{flexDirection: "row"}}>
          <Text style={styles.subexp}>Login and security</Text>
          <TouchableOpacity style={{marginLeft: "auto"}} onPress={onPressSave}>
            <Text style={{fontSize: 20, color: "#64b5f6", fontWeight: "500", }}>Save</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={[{ flexDirection: 'row', marginTop: 30 }]}>
          <View style={styles.circle}>
            <Feather style={[styles.icon,]} name="phone-call" size={18} color="#64b5f6" />
          </View>
          <Text style={[styles.username,]}>Phone Number</Text>        
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Phone number"
            value={phone}
            placeholderTextColor={"#DDD"}
            onChange={onChangePhone}
          />
        </View>
        
        <TouchableOpacity style={[{ flexDirection: 'row', marginTop: 30 }]}>
          <View style={styles.circle}>
            <Fontisto style={[styles.icon,]} name="email" size={18} color="#64b5f6" />
          </View>
          <Text style={[styles.username,]}>Email</Text>
        </TouchableOpacity>     
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            value={email}
            placeholderTextColor={"#DDD"}
            onChange={onChangeEmail}
          />
        </View>

        <TouchableOpacity style={[{ flexDirection: 'row', marginTop: 30 }]}>
          <View style={styles.circle}>
            <Feather style={[styles.icon,]} name="calendar" size={18} color="#64b5f6" />
          </View>
          <Text style={[styles.username,]}>Max Date</Text>        
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Max Date"
            value={maxDate}
            placeholderTextColor={"#DDD"}
            onChange={onChangeMaxDate}
          />
        </View>

        <TouchableOpacity style={[{ flexDirection: 'row', marginTop: 30 }]}>
          <View style={styles.circle}>
            <Feather style={[styles.icon,]} name="clock" size={18} color="#64b5f6" />
          </View>
          <Text style={[styles.username,]}>Open Time</Text>        
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Open Time"
            value={openTime}
            placeholderTextColor={"#DDD"}
            onChange={onChangeOpenTime}
          />
        </View>

        <TouchableOpacity style={[{ flexDirection: 'row', marginTop: 30 }]}>
          <View style={styles.circle}>
            <Feather style={[styles.icon,]} name="clock" size={18} color="#64b5f6" />
          </View>
          <Text style={[styles.username,]}>Close Time</Text>        
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Close Time"
            value={closeTime}
            placeholderTextColor={"#DDD"}
            onChange={onChangeCloseTime}
          />
        </View>
      
      </View>
      <View style={styles.lastBox}>
        <TouchableOpacity style={[{ flexDirection: 'row' }]}>
          <FontAwesome style={[styles.icon, {}]} name="power-off" size={24} color="red" />
          <Text style={[styles.username, { color: 'red' }]}>Deactivate</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
};

export default PrSettings

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 38,
    padding: 10,
    letterSpacing: 1,
    top: 30,
    marginTop: 20,
    fontFamily: 'Montserrat_700Bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    padding: 10,
    letterSpacing: 1,
    top: 20,
    fontFamily: 'Montserrat_600SemiBold',
  },
  box: {
    backgroundColor: '#FFF',
    shadowColor: "#000",
    elevation: 10,
    width: "90%",
    borderRadius: 20,
    flexWrap: "wrap",
    padding: 25,
    alignSelf: "center",
    marginTop: -90,
  },
  lastBox: {
    backgroundColor: '#FFF',
    shadowColor: "#000",
    elevation: 3,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    flexWrap: "wrap",
    height: 70,
    padding: 25,
    marginTop: 20,
    marginBottom: 80,
  },
  subexp: {
    fontSize: 15,
    color: '#a9a9a9',
    fontWeight: '500',
  },
  circle: {
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    bottom: 3,
  },
  username: {
    fontSize: 18,
    height: 52,
    color: `#555555`,
    fontWeight: "bold",
    left: 25,
  },
  inputView: {
    backgroundColor: '#ffffff',
    width: "90%",
    height: 30,
    alignSelf: "center",
    borderColor: "#DDD",
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  TextInput: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    left: 5,
  },
});