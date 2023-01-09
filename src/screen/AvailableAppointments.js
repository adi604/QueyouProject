import { ScrollView, TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import Reviews from '../components/Reviews'

const AvailableAppointments = props => {

    const [isReviews, setIsReviews] = useState(false);
    const [providerReview, setProviderReview] = useState("");


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


    return (
        <View style={[{ backgroundColor: "white", top: 25, height: "100%" }]}>
            <LinearGradient
                colors={['#000066', '#004C99', '#0066CC']}
                style={styles.linearGradientResult}
            >
                <Text style={styles.resultsFound}>89 results were found</Text>
            </LinearGradient>

            <FlatList style={[{ top: 20 }]}
                data={queues}
                renderItem={({ item }) =>
                    <View style={[{ bottom: 22 }]}>
                        <View style={[{ left: 16, marginBottom: 15, padding: 8 }]}>
                            <Text style={styles.provider}>{item.provider}</Text>
                            <Text style={styles.category}>{item.category}</Text>
                            <Text style={styles.address}>{item.address}</Text>
                            <TouchableOpacity onPress={function () { setProviderReview(item.provider); setIsReviews(!isReviews); }}>
                                <Text style={styles.reviews}>Review this business</Text>
                            </TouchableOpacity>
                            <View>
                                {(isReviews && (providerReview === item.provider)) ? <Reviews navigation={props.navigation} /> : <View></View>}
                            </View>
                            <LinearGradient
                                colors={['#000066', '#004C99', '#0066CC']}
                                style={styles.linearGradient}
                            >
                                <TouchableOpacity style={styles.buttonAppointment}>
                                    <Text style={styles.appointment}>Queue{"\n"}Reservation</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            <View style={{ top: 18, right: 25, width: 500, height: 1, backgroundColor: `#dcdcdc`, }} />
                        </View>
                    </View>}
            />
        </View>
    )
};


export default AvailableAppointments


const styles = StyleSheet.create({
    linearGradientResult: {
        alignItems: "center",
    },
    resultsFound: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        padding: 10,
        letterSpacing: 1,
        left: 10,
        fontWeight: '500',
    },
    provider: {
        fontSize: 28,
        height: 52,
        letterSpacing: 0.5,
        color: `#000066`,
        fontWeight: "bold",
        textDecorationLine: 'underline',
        letterSpacing: 0.5,
        left: 11,
        top: 6,
    },
    category: {
        left: 11,
        fontSize: 18,
        letterSpacing: 0.5,
        height: 30,
        color: `#808080`,
        fontWeight: "bold",
    },
    address: {
        left: 11,
        fontSize: 18,
        height: 30,
        color: `#808080`,
    },
    reviews: {
        left: 11,
        fontSize: 19,
        marginBottom: 10,
        color: '#0066CC',
        letterSpacing: 0.8,
        fontWeight: '500',
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
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 80,
        height: 40,
        left: 11,
    },
});