import { ScrollView, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const AppointmentDetails = props => {

    const [isPast, setIsPast] = useState(false);

    const queues = [
        { provider: "Devin", category: "Barbar", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/barbar.png') },
        { provider: "Sarit", category: "Dentist", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/dentist.png') },
        { provider: "Linor", category: "Ministry", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/ministry.png') },
        { provider: "Devin", category: "Barbar", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/barbar.png') },
        { provider: "Sarit", category: "Dentist", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/dentist.png') },
        { provider: "Linor", category: "Ministry", day: "sunday", date: "31/1/2023", hour: "14:30", icon: require('./../../assets/ministry.png') },
    ];

    const onPressAdd = () => {
        props.navigation.navigate('SearchUserScreen');
    };

    return (
        <ScrollView style={styles.card}>
            <View style={{ height: 2, backgroundColor: "#EEE", marginTop: 5, marginBottom: 25, }}></View>
            <View style={{ flexDirection: "row", }}>
                <Ionicons style={{ top: 7 }} name="person" size={23} color="#777" />
                <View style={{ flexDirection: "column", left: 25 }}>
                    <Text style={styles.provider}>Devin Aviv</Text>
                    <Text style={styles.phon}>0569871548</Text>
                </View>
            </View>
            <View style={{ height: 2, backgroundColor: "#EEE" }}></View>
            <View style={{ flexDirection: "column", marginTop: 50 }}>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesome5 name="calendar-alt" size={24} color="#444" />
                    <View style={styles.details}>
                        <Text style={styles.title}>10:00</Text>
                        <Text style={styles.subtitle}>Monday, 23/9/2019</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 30, }}>
                    <MaterialCommunityIcons name="calendar-blank-multiple" size={25} color="#444" />
                    <View style={styles.details}>
                        <Text style={styles.title}>dental checkout</Text>
                        <Text style={styles.subtitle}>Regular Visit, 30$</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 30, }}>
                    <Entypo name="location" size={24} color="#444" />
                    <View style={styles.details}>
                        <Text style={styles.title}>Herzel 78</Text>
                        <Text style={styles.subtitle}>Givatyim</Text>
                    </View>
                </View>
                <View style={{ height: 2, backgroundColor: "#EEE", marginTop: 30, }}></View>
                <TouchableOpacity>
                    <View style={{ flexDirection: "row", marginTop: 30, }}>
                        <AntDesign name="edit" size={24} color="#000" />
                        <View style={styles.details}>
                            <Text style={[styles.title, { color: "#000" }]}>Edit</Text>
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
        marginTop: 5,
        left: 20,
        top: 10,
        height: 45,
        width: 45,
    },
    details: {
        flexDirection: "column",
        left: 20,
    },
    title: {
        fontSize: 19,
        fontWeight: "800",
        height: 30,
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