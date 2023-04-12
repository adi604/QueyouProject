import { ScrollView, TouchableOpacity, Image, FlatList, StyleSheet, Text, View, Linking } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

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
            <View style={{
                shadowColor: '#000',
                elevation: 45,
            }}>
                <LinearGradient
                    colors={['#4FA4E5', '#0069BA',]}
                    style={{
                        width: '100%', height: 100, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, padding: 20, bottom: 25,
                        shadowColor: '#000',
                        elevation: 30,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Text style={styles.resultsFound}>89 results were found</Text>
                    <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                        <Ionicons style={{ top: 15, }} name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <View style={{ flexDirection: 'row', width: '90%', alignSelf: "center", marginRight: 10, }}>
                <TouchableOpacity style={[styles.btnfilter, isFilter && styles.pressed]} onPress={() => { setIsFilter(true); }}>
                    <Text style={[styles.textfilter, isFilter && styles.pressedText]}>Filtered</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnfilter, { left: 10 }, !isFilter && styles.pressed]} onPress={() => { setIsFilter(false); }}>
                    <Text style={[styles.textfilter, !isFilter && styles.pressedText]}>All</Text>
                </TouchableOpacity>
            </View>

            <FlatList style={[{ top: 20 }]}
                data={queues}
                renderItem={({ item }) =>
                    <View style={styles.box}>
                        <MaterialIcons style={{ alignSelf: "center", marginLeft: 10 }} name="person-pin" size={55} color="#0069BA" />
                        <View style={[{ left: 30, flexDirection: "column", bottom: 10 }]}>
                            <View style={[{ flexDirection: 'row', top: 10, }]}>
                                <Text style={styles.provider}>{item.provider}</Text>
                                <TouchableOpacity onPress={onPressReview}>
                                    <Fontisto style={{ marginLeft: 70, top: 12 }} name="preview" size={28} color="#0069BA" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.category}>{item.category}</Text>
                            <TouchableOpacity onPress={() => onPressLocation(item.address)}>
                                <View style={[{ flexDirection: 'row', bottom: 5 }]}>
                                    <Entypo name="location" size={20} color="#777" />
                                    <Text style={styles.address}>{item.address}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.continuebtn} onPress={onPressSchedule}>
                            <MaterialIcons name="navigate-next" size={40} color="#AAA" />
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
        fontSize: 19,
        top: 40,
        letterSpacing: 1,
        fontWeight: '500',
    },
    btnfilter: {
        fontSize: 40,
        backgroundColor: '#e9e9e9',
        width: '50%',
        height: 35,
        borderRadius: 20,
        justifyContent: 'center',
        elevation: 10,
        shadowColor: "#000",
    },
    pressed: {
        backgroundColor: '#0069BA',
    },
    textfilter: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        fontWeight: "500",
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
        marginBottom: 25,
        marginTop: 10,
    },
    provider: {
        fontSize: 18,
        color: `#777`,
        fontWeight: "bold",
        top: 5,
    },
    category: {
        fontSize: 14,
        height: 30,
        color: `#808080`,
        marginTop: 10,
    },
    address: {
        fontSize: 17,
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
        left: "120%",
        alignSelf: "center",
    },
});