import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { serverBaseUrl } from '../utils/strings';
import { sendRequest, getCustomerDetails } from '../utils/utils'
import { Avatar } from 'react-native-paper';

const moment = require('moment');

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
  //const customerDetails = await getCustomerDetails();
  const [appointmentsToShow, setAppointmentsToShow] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [futureAppointments, setFutureAppointments] = useState([]);
  const [isScreenFocused, setIsScreenFocused] = useState(false);


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


const onPressAppointmentsBtn = () => {
  if (!isPast) {
    setAppointmentsToShow(appointments);
  } else {
    setAppointmentsToShow(futureAppointments);
  }
  setIsPast(!isPast);
}

const getDay = (dateStr) => {
  // #### check format ###
  const dateObj = moment(dateStr, 'YYYY-MM-DD');
  return dateObj.format('dddd');
}

async function handleDeleteAppointment (key) {
  // Delete from the server
  const url = `${serverBaseUrl}/meetings/${key}`;
  const response = await sendRequest(url, 'DELETE');
  if(!response.ok) {
      console.log("Delete Meeting Faild !")
  } else {
      // Fetch succeeded
      console.log("Delete Meeting succeeded !")
      // Delete from the client
      setAppointmentsToShow((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.key != key)
      );
      setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.key != key)
      );
      setFutureAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.key != key)
      );
  }
};


const getObj = async (item) => {
      const url = `${serverBaseUrl}/providers/username/${item.providerUserName}`;
      const response = await sendRequest(url, 'GET');
      let image = '';
      if (response.ok) {
        image = response.body.image;
      }
      const res = {
        key: item._id,
        id: item._id,
        provider: item.providerName,
        providerUserName: item.providerUserName,
        date: item.date,
        hour: item.time,
        day: getDay(item.date),
        image: image,
      }
      return res;
}


useFocusEffect(
  React.useCallback(() => {
    setIsScreenFocused(true);

    return () => {
      setIsScreenFocused(false);
    };
  }, [])
);


useEffect(() => {
    async function fetchMeetings() {
        // Fetch appointments from API or local storage
        const customerDetails = await getCustomerDetails();
        const url = `${serverBaseUrl}/meetings/customerMeetings/${customerDetails.username}`;
        const response = await sendRequest(url, 'GET');
        if(!response.ok) {
            console.log("Fetch Meetings Faild !")
        } else {
            // Fetch succeeded
            const data = response.body
            const appointmentsData = []
            for (let i=0; i < data.length; i++) {
              const res = await getObj(data[i])
              appointmentsData.push(res)
            }
            appointmentsData.sort((a, b) => {
              const dateA = `${a.date} ${a.hour}`;
              const dateB = `${b.date} ${b.hour}`;
              return moment(dateA, 'DD-MM-YYYY HH:mm').diff(moment(dateB, 'DD-MM-YYYY HH:mm'));
            });
            const futureAppointmentsData = appointmentsData.filter((a) => {
              const tempStr = `${a.date} ${a.hour}`;
              const tempDate = moment(tempStr, 'DD-MM-YYYY HH:mm');
              return tempDate.isAfter(moment());
            })
            console.log(futureAppointmentsData)
            setAppointments(appointmentsData);
            setFutureAppointments(futureAppointmentsData);
            setAppointmentsToShow(futureAppointmentsData);
        }
    }
  fetchMeetings()
  }, [isScreenFocused]);


  const renderItem = ({ item, index }) => {
    const isLastItem = index === appointmentsToShow.length - 1;
    return (
      <TouchableOpacity style={{}} onPress={() => props.navigation.navigate('ADNevigator', {meeting: item,deleteAppointment:handleDeleteAppointment})}>
        <View style={[styles.box, isLastItem && { marginBottom: 120, }]}>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flexDirection: 'column', width: 50 }}>
              {item.image ? <Avatar.Image size={45} source={{uri: item.image}} style={styles.icon}/>
                        : <MaterialCommunityIcons name="account-circle-outline" size={45} color="#6CC3ED" style={styles.icon} />}
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
              source={require('../../assets/logo7.png')}
              style={{ width: 90, height: 90, marginLeft: 'auto' }}
              >
            </Image>
            {(isPast) ?
              <TouchableOpacity style={{ marginLeft: "auto", right: 40, top: 10 }} onPress={onPressAppointmentsBtn}>
                <MaterialCommunityIcons name="filter-check" size={30} color="white" />
              </TouchableOpacity> :
              <TouchableOpacity style={{ marginLeft: "auto", right: 40, top: 10 }} onPress={onPressAppointmentsBtn}>
                <MaterialCommunityIcons name="filter-check-outline" size={30} color="white" />
              </TouchableOpacity>}
          </View>
          <View style={{ height: 1, width: "70%", backgroundColor: "#FFF", shadowColor: '#FFF', elevation: 10, alignSelf: "center" }}></View>
          {(isPast) ?
            <View style={{ alignSelf: "center", top: 5}}>
              <Text style={{ color: "#FFF", fontSize: 20, fontFamily: 'Montserrat_700Bold', }} >All Appointments</Text>
            </View> :
            <View style={{ alignSelf: "center", top: 5 }}>
              <Text style={{ color: "#FFF", fontSize: 20, fontFamily: 'Montserrat_700Bold', }} >Future Appointments</Text>
            </View>
          }
        </LinearGradient>
      </View>
      <FlatList
        style={[styles.list,]}
        data={appointmentsToShow}
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
    height: 100,
    width: "95%",
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
    backgroundColor: `#CCC`,
    height: "85%",
    marginLeft: 40,
  },
  date: {
    bottom: 32,
    right: 45,
    fontSize: 12,
    fontWeight: '600',
    color: "#c0c0c0",
    marginLeft:10,

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