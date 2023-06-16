import { ScrollView, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { serverBaseUrl } from '../utils/strings';
import { sendRequest } from '../utils/utils';
import { Avatar } from 'react-native-paper';



const AppointmentDetails = props => {
    const [meeting, setMeeting] = useState(props.route.params.meeting)
    const [providerDetails, setProviderDetails] = useState({phoneNumber:"",address:"",description:"", image:""})


    useEffect(() => {
          async function fetchProviderDetails() {
              // Fetch appointments from API or local storage
              const url = `${serverBaseUrl}/providers/username/${meeting.providerUserName}`;
              const response = await sendRequest(url, 'GET');
              if(!response.ok) {
                  console.log("Fetch details Faild !")
              } else {
                  // Fetch succeeded
                  const data = response.body
                  const details = {}
                  details.phoneNumber = data.phoneNumber
                  details.address = data.address
                  details.description = data.description
                  details.image = data.image
                  setProviderDetails(details);
              }
          }
          fetchProviderDetails()
        }, []);

        async function handleDeleteAppointment (key) {
            props.route.params.deleteAppointment(key);
            props.navigation.goBack();
        };


    return (
        <ScrollView style={styles.card}>
            <View style={{ height: 2, backgroundColor: "#EEE", marginTop: 5, marginBottom: 25, }}></View>
            <View style={{ flexDirection: "row", }}>
                {providerDetails.image ? <Avatar.Image size={70} source={{uri: providerDetails.image}} style={styles.icon}/>
                    : <MaterialCommunityIcons name="account-circle-outline" size={70} color="#6CC3ED" style={styles.icon} />}

                <View style={{ flexDirection: "column", left: 25 }}>
                    <Text style={styles.provider}>{meeting.provider}</Text>
                    <Text style={styles.phon}>{providerDetails.phoneNumber}</Text>
                </View>
            </View>
            <View style={{ height: 2, backgroundColor: "#EEE" }}></View>
            <View style={{ flexDirection: "column", marginTop: 50 }}>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome5 name="calendar-alt" size={24} color="#444" />
                    <View style={styles.details}>
                        <Text style={styles.title}>{meeting.day} {meeting.date} {meeting.hour}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 30, }}>
                    <MaterialCommunityIcons name="calendar-blank-multiple" size={25} color="#444" />
                    <View style={styles.details}>
                        <Text style={styles.title}>{providerDetails.description}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 30, }}>
                    <Entypo name="location" size={24} color="#444" />
                    <View style={styles.details}>
                        <Text style={styles.title}>{providerDetails.address}</Text>
                    </View>
                </View>
                <View style={{ height: 2, backgroundColor: "#EEE", marginTop: 30, }}></View>
                <TouchableOpacity onPress={() => handleDeleteAppointment(meeting.key)}>
                    <View style={{ flexDirection: "row", marginTop: 50, }}>
                        <AntDesign name="delete" size={24} color="red" />
                        <View style={styles.details}>
                            <Text style={[styles.title, { color: "red" }]}>Delete</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
};


export default AppointmentDetails


const styles = StyleSheet.create({
    card: {
        padding: 30,
        backgroundColor: "#FFF",
        height: "100%",
    },
    icon: {
        left: 5,
        top: 5,
        height: 70,
        width: 70,
    },
    details: {
        flex: 0.9,
        left: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: "800",
        height: 50,
        color: "#555",
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "400",
        color: "#999"
    },
    category: {
        left: 19,
        fontSize: 15,
        height: 30,
        color: `#696969`,
        top: 10,
        fontWeight: '400',
    },
    verticalLine: {
        top: 5,
        width: 2,
        backgroundColor: `#dcdcdc`,
        height: "90%",
        marginLeft: 40,

    },
    date: {
        bottom: 30,
        right: 45,
        fontSize: 12,
        fontWeight: '600',
        color: "#c0c0c0",

    },
    day: {
        bottom: 8,
        left: 10,
        fontSize: 17,
        color: "#c0c0c0",
        fontWeight: '400',

    },
    hour: {
        bottom: 8,
        left: 14,
        fontSize: 17,
        fontWeight: '400',
        color: "#c0c0c0",
    },
    provider: {
        fontSize: 24,
        height: 40,
        color: `#333`,
        fontWeight: "800",
    },
    phon: {
        fontSize: 15,
        letterSpacing: 1,
        height: 50,
        color: `#888`,
        fontWeight: "bold",
    },
    addbtn: {
        bottom: 90,
        right: 20,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        alignSelf: 'flex-end',
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