import { ScrollView, TouchableOpacity, Image, FlatList, StyleSheet, Text, View, Linking } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

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
            <View style={{
                shadowColor: '#000',
                elevation: 45,
            }}>
                <LinearGradient
                    colors={['#64b5f6', '#9575cd']}
                    style={{
                        width: '100%', height: 100, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, padding: 20, bottom: 25,
                        shadowColor: '#000',
                        elevation: 50,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Text style={styles.resultsFound}>89 results were found</Text>
                </LinearGradient>
            </View>
            <View style={{ flexDirection: 'row', width: '90%', left: 15, }}>
                <TouchableOpacity style={[styles.btnfilter, isFilter && styles.pressed]} onPress={() => { setIsFilter(true); }}>
                    <Text style={[{ fontSize: 20, color: 'black', textAlign: 'center', top: 5, }, isFilter && styles.pressedText]}>Filtered</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btnfilter, { left: 10 }, !isFilter && styles.pressed]} onPress={() => { setIsFilter(false); }}>
                    <Text style={[{ fontSize: 20, color: 'black', textAlign: 'center', top: 5, }, !isFilter && styles.pressedText]}>All</Text>
                </TouchableOpacity>
            </View>

            <FlatList style={[{ top: 20 }]}
                data={queues}
                renderItem={({ item }) =>
                    <View style={styles.box}>
                        <View style={[{ flexDirection: 'row', bottom: 22, }]}>
                            <Image style={{ height: 50, width: 50, top: 35, left: 20, }} source={require('./../../assets/person.png')}></Image>
                            <View style={[{ left: 20, marginBottom: 15, padding: 8 }]}>
                                <View style={[{ flexDirection: 'row' }]}>
                                    <Text style={styles.provider}>{item.provider}</Text>
                                    <TouchableOpacity onPress={onPressReview}>
                                        <Image style={{ width: 45, height: 45, top: 20, left: 70, }} source={require('../../assets/reviews.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.category}>{item.category}</Text>
                                <TouchableOpacity onPress={ () => onPressLocation(item.address)}>
                                    <View style={[{ flexDirection: 'row' }]}>
                                        <Image style={styles.locationbtn} source={require('../../assets/location.png')}></Image>
                                        <Text style={styles.address}>{item.address}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.continuebtn} onPress={onPressSchedule}>
                                <Image style={styles.continuebtn} source={require('../../assets/continue.png')}></Image>
                            </TouchableOpacity>
                        </View>
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
        backgroundColor: '#FFF',
        shadowColor: "#000",
        elevation: 15,
        height: 80,
        marginTop: 5,
        width: 370,
        left: 20,
        borderRadius: 50,
        marginBottom: 25,
    },
    provider: {
        fontSize: 18,
        height: 52,
        color: `#505050`,
        fontWeight: "bold",
        left: 11,
        top: 18,
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
        height: 40,
        width: 40,
        top: '10%',
        left: '38%',
    },
});