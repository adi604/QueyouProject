import { ScrollView, TouchableOpacity, Image, FlatList, StyleSheet, Text, View, Linking } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

import Reviews from '../components/Reviews'

const AvailableAppointments = props => {

  const [isFilter, setIsFilter] = useState(true);

  const onPressSchedule = () => {
    props.navigation.navigate('CalendarPickerScreen');
  };

  const onPressLocation = (address) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    Linking.openURL(url);
  }


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
    <View style={[{ backgroundColor: "white", top: 25, height: "100%" }]}>
      <FlatList style={[{ top: 20 }]}
        data={queues}
        renderItem={({ item }) =>
          <View style={styles.box}>
            <MaterialIcons style={{ alignSelf: "center", marginLeft: 10 }} name="person-pin" size={50} color="black" />
            <View style={[{ left: 20, flexDirection: "column", bottom: 10 }]}>
              <View style={[{ flexDirection: 'row', top: 10, }]}>
                <Text style={styles.provider}>{item.provider}</Text>
                <TouchableOpacity style={styles.provider} onPress={onPressReview}>
                  <Fontisto style={{ marginLeft: 70, }} name="preview" size={28} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={styles.category}>{item.category}</Text>
              <TouchableOpacity onPress={() => onPressLocation(item.address)}>
                <View style={[{ flexDirection: 'row', bottom: 5 }]}>
                  <Entypo name="location" size={20} color="black" />
                  <Text style={styles.address}>{item.address}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.continuebtn} onPress={onPressSchedule}>
            <MaterialIcons name="navigate-next" size={40} color="black" />
            </TouchableOpacity>
          </View>}
      />
    </View>
  )
};


export default AvailableAppointments


const styles = StyleSheet.create({
  resultsFound: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 10,
    letterSpacing: 1,
    left: 10,
    top: 30,
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
  pressed: {
    backgroundColor: '#9575cd',
  },
  pressedText: {
    color: '#fff',
    textShadowColor: 'rgba(255,255,255, 0.3)',
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 20,
  },
  box: {
    flexDirection: "row",
    backgroundColor: '#FFF',
    shadowColor: "#000",
    elevation: 15,
    height: 80,
    width: 380,
    alignSelf: "center",
    borderRadius: 50,
    marginBottom: 30,
  },
  provider: {
    fontSize: 20,
    height: 52,
    color: `#505050`,
    fontWeight: "bold",
  },
  category: {
    fontSize: 14,
    height: 30,
    color: `#808080`,
    marginTop: -12,
  },
  address: {
    fontSize: 17,
    height: 30,
    color: `#808080`,
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
    left: "100%",
    alignSelf: "center",
  },
});