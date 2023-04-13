import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const MyAppointments = props => {

  const [isPast, setIsPast] = useState(false);
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

  const queues = [
    { id: "1", provider: "Devin", category: "Barbar", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/barbar.png') },
    { id: "2", provider: "Sarit", category: "Dentist", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/dentist.png') },
    { id: "3", provider: "Linor", category: "Ministry", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/ministry.png') },
    { id: "4", provider: "Devin", category: "Barbar", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/barbar.png') },
    { id: "5", provider: "Sarit", category: "Dentist", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/dentist.png') },
    { id: "6", provider: "Linor", category: "Ministry", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/ministry.png') },
  ];

  const renderItem = ({ item, index }) => {
    const isLastItem = index === queues.length - 1;
    return (
      <TouchableOpacity style={{}} onPress={() => props.navigation.navigate('ADNevigator')}>
        <View style={[styles.box, isLastItem && { marginBottom: 120, }]}>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'column', width: 60 }}>
              <Image style={styles.icon} source={item.icon}></Image>
              <Text style={styles.category}>{item.category}</Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={[{ left: 16 }]}>
              <Text style={styles.provider}>{item.provider}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.day}>{item.day} in hour</Text>
                <Text style={styles.hour}>{item.hour}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ backgroundColor: '#faffff', height: '100%', }}>
      <View>
        <LinearGradient
          colors={['#64b5f6', '#6CC3ED', '#6CC3ED']}
          style={{
            width: "100%", shadowColor: "#000", elevation: 50, height: 210,
          }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={{ marginTop: 30, marginBottom: 10, flexDirection: "row", width: "105%" }}>
            <Image
              source={require('../../assets/profile.jpg')}
              style={{ width: 90, height: 90, borderRadius: 50, marginLeft: 'auto' }}
            />
            {(isPast) ?
              <TouchableOpacity style={{ marginLeft: "auto", right: 40, top: 10 }} onPress={() => { setIsPast(!isPast) }}>
                <MaterialCommunityIcons name="filter-check" size={30} color="white" />
              </TouchableOpacity> :
              <TouchableOpacity style={{ marginLeft: "auto", right: 40, top: 10 }} onPress={() => { setIsPast(!isPast) }}>
                <MaterialCommunityIcons name="filter-check-outline" size={30} color="white" />
              </TouchableOpacity>}
          </View>
          <View style={{ height: 1, width: "70%", backgroundColor: "#FFF", shadowColor: '#FFF', elevation: 10, alignSelf: "center" }}></View>
          {(isPast) ?
            <View style={{ alignSelf: "center", top: 5}}>
              <Text style={{ color: "#FFF", fontSize: 20, fontFamily: 'Montserrat_700Bold', }} >Passed Appointments</Text>
            </View> :
            <View style={{ alignSelf: "center", top: 5 }}>
              <Text style={{ color: "#FFF", fontSize: 20, fontFamily: 'Montserrat_700Bold', }} >My Appointments</Text>
            </View>
          }
        </LinearGradient>
      </View>
      <FlatList
        style={[styles.list,]}
        data={queues}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
};


export default MyAppointments


const styles = StyleSheet.create({
  icon: {
    marginTop: 5,
    left: 20,
    top: 10,
    height: 45,
    width: 45,
  },
  category: {
    left: 19,
    fontSize: 15,
    height: 30,
    color: `#696969`,
    top: 10,
    fontWeight: '400',
  },
  list: {
    marginTop: -40,
    backgroundColor: "#FFF",
    width: "100%",
    shadowColor: "#000",
    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignSelf: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  box: {
    backgroundColor: '#FFF',
    shadowColor: "#000",
    borderColor: "#EEE",
    borderWidth: 4,
    height: 115,
    width: "90%",
    borderRadius: 2,
    marginBottom: 30,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  verticalLine: {
    top: 5,
    width: 2,
    backgroundColor: `#dcdcdc`,
    height: "90%",
    marginLeft: 40,
  },
  date: {
    bottom: 32,
    right: 45,
    fontSize: 12,
    fontWeight: '600',
    color: "#c0c0c0",

  },
  day: {
    bottom: 5,
    left: 10,
    fontSize: 17,
    color: "#c0c0c0",
    fontWeight: '400',

  },
  hour: {
    bottom: 5,
    left: 14,
    fontSize: 17,
    fontWeight: '400',
    color: "#c0c0c0",
  },
  provider: {
    padding: 10,
    fontSize: 21,
    height: 50,
    color: `#696969`,
    fontWeight: "bold",
  },
  btn: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    alignSelf: 'flex-end'
  },
});