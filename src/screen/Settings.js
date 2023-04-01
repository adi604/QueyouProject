import { ScrollView, TouchableOpacity, Image, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5, Feather, Fontisto, MaterialIcons, Ionicons, FontAwesome  } from '@expo/vector-icons'; 


const Settings = props => {

  const [isFilter, setIsFilter] = useState(true);

  const onPressSchedule = () => {
    props.navigation.navigate('CalendarPickerScreen');
  };


  const queues = [
    { provider: "Devin1", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
    { provider: "Devin2", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
    { provider: "Devin3", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
    { provider: "Devin4", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
    { provider: "Devin5", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
    { provider: "Devin6", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
    { provider: "Devin7", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
    { provider: "Devin8", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
    { provider: "Devin9", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
    { provider: "Devin10", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30", address: "Tel Aviv, Alenbi 12" },
  ];

  const onPressReview = () => {
    props.navigation.navigate('Reviews');
  };


  return (
    <ScrollView  style={[{ backgroundColor: "white", top: 25, height: "100%" }]}>
      <View style={{
        shadowColor: '#000',
        elevation: 45,
      }}>
        <LinearGradient
          colors={['#64b5f6', '#64b5f6']}
          style={{
            width: '100%', height: 250, padding: 20, bottom: 25,
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
        <Text style={styles.subexp}>Login and security</Text>
        <View style={[{ flexDirection: 'row', marginTop: 30, }]}>
          <FontAwesome5 style={[styles.icon,]} name="user" size={21} color="#64b5f6" />
          <Text style={styles.username}>Username</Text>
          <TouchableOpacity onPress={onPressSchedule}>
            <Image style={[styles.continuebtn, {left: "570%"}]} source={require('../../assets/continue.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={[{ flexDirection: 'row', marginTop: 10 }]}>
          <Feather style={[styles.icon,]} name="phone-call" size={22} color="#64b5f6" />
          <Text style={[styles.username,]}>Phone Number</Text>
          <TouchableOpacity onPress={onPressSchedule}>
          <Image style={[styles.continuebtn, {left: "435%"}]} source={require('../../assets/continue.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={[{ flexDirection: 'row', marginTop: 10 }]}>
          <Fontisto style={[styles.icon, ]} name="email" size={22} color="#64b5f6" />
          <Text style={[styles.username,]}>Email</Text>
          <TouchableOpacity onPress={onPressSchedule}>
          <Image style={[styles.continuebtn, {left: "670%"}]} source={require('../../assets/continue.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={[{ flexDirection: 'row', marginTop: 10 }]}>
          <MaterialIcons style={[styles.icon,]} name="lock-outline" size={26} color="#64b5f6" />
          <Text style={[styles.username, {left: 20, top: 4}]}>Password</Text>
          <TouchableOpacity onPress={onPressSchedule}>
          <Image style={[styles.continuebtn, {left: "550%"}]} source={require('../../assets/continue.png')}></Image>
          </TouchableOpacity>
        </View>
        <Text style={[styles.subexp, {top: 20}]}>Data and permissions</Text>
        <View style={[{ flexDirection: 'row', left: 25, marginTop: 45, marginBottom: -15 }]}>
          <Ionicons style={[styles.icon, ]} name="location-sharp" size={25} color="#64b5f6" />
          <Text style={[styles.username, {left: 20, }]}>Location</Text>
          <TouchableOpacity onPress={onPressSchedule}>
          <Image style={[styles.continuebtn, {left: "580%"}]} source={require('../../assets/continue.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lastBox}>
        <View style={[{ flexDirection: 'row'}]}>
          <FontAwesome style={[styles.icon, { }]} name="power-off" size={24} color="#d32f2f" />
          <Text style={[styles.username, {color: '#d32f2f'}]}>Deactive</Text>
          <TouchableOpacity onPress={onPressSchedule}>
            <Image style={[styles.continuebtn, {left: "570%"}]} source={require('../../assets/continue.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
};


export default Settings


const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
    padding: 10,
    letterSpacing: 1,
    top: 30,
    marginTop: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    padding: 10,
    letterSpacing: 1,
    top: 15,
    fontWeight: '500',
  },
  btnfilter: {
    width: 80,
    fontSize: 40,
    backgroundColor: '#e9e9e9',
    width: '50%',
    height: 40,
    borderRadius: 20,
  },
  box: {
    backgroundColor: '#FFF',
    shadowColor: "#000",
    elevation: 50,
    width: 350,
    left: 30,
    bottom: 100,
    borderRadius: 20,
    flexWrap: "wrap",
    padding: 25,
  },
  lastBox: {
    backgroundColor: '#FFF',
    shadowColor: "#000",
    elevation: 10,
    width: 350,
    left: 30,
    bottom: 100,
    borderRadius: 20,
    flexWrap: "wrap",
    height: 70,
    padding: 25,
    marginTop: 30,
  },
  subexp: {
    fontSize: 15,
    color: '#a9a9a9',
    left: 30,
    fontWeight: '500',
  },
  icon: {
    height: 25,
    width: 25,
    top: 2,

  },
  username: {
    fontSize: 18,
    height: 52,
    color: `#555555`,
    fontWeight: "bold",
    left: 25,
  },
  category: {
    left: 11,
    fontSize: 13,
    height: 30,
    color: `#808080`,
    bottom: 10,
  },
  address: {
    fontSize: 17,
    height: 30,
    color: `#808080`,
    bottom: 15,
    left: 3,
  },
  locationbtn: {
    height: 28,
    width: 28,
    left: 3,
    bottom: 18,
  },
  reviews: {
    left: 35,
    fontSize: 15,
    top: 18,
    color: '#9575cd',
    letterSpacing: 0.8,
    fontWeight: '700',
  },
  buttonAppointment: {
    borderRadius: 5,
  },
  appointment: {
    textAlign: "center",
    fontSize: 12,
    letterSpacing: 0.5,
    color: `white`,
    fontWeight: "bold",
  },
  continuebtn: {
    height: 30,
    width: 30,
    left: 80,
    bottom: 2,
  },
});