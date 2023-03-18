import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


const MyAppointment = props => {

    const queues = [
        { provider: "Devin", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30" },
        { provider: "Devin", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30" },
        { provider: "Devin", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30" },
    ];


    return (
        <View style={[{ backgroundColor: "white" }]}>
            <View>
                <LinearGradient
                    colors={['#64b5f6', '#9575cd']}
                    style={{
                        width: 450, height: 120, right: 20, padding: 20, bottom: 18, elevation: 30,
                        shadowColor: '#52006A',
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <Text style={styles.heading}>My Appointment</Text>
                </LinearGradient>
            </View>
            <FlatList
                data={queues}
                renderItem={({ item }) =>
                    <View>
                        <View style={{ flexDirection: 'row', padding: 7, }}>
                            <View style={styles.verticalLine} />
                            <View style={styles.circle} />
                            <View style={[{ left: 16 }]}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.date}>{item.date}</Text>
                                    <Text style={styles.day}>{item.day} in hour</Text>
                                    <Text style={styles.hour}>{item.hour}</Text>
                                </View>

                                <Text style={styles.provider}>{item.provider}</Text>
                                <Text style={styles.category}>{item.category}</Text>
                                <View style={{ top: 5, right: 25, width: 500, height: 1, backgroundColor: `#808080`, }} />
                            </View>
                        </View>
                    </View>}
            />
        </View>
    )
};


export default MyAppointment


const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        left: 10,
        top: 20,
        color: 'white',
        padding: 20,
    },
    verticalLine: {
        top: 5,
        left: 8,
        width: 3.5,
        backgroundColor: `#ffa500`,
        height: "90%",

    },
    circle: {
        width: 15,
        height: 15,
        right: 1,
        top: 45,
        borderRadius: 50,
        backgroundColor: `#ffa500`,
    },
    date: {
        top: 10,
        fontSize: 18,
        left: 10,
        color: "#808080",

    },
    day: {
        top: 10,
        left: 30,
        fontSize: 18,
        color: "#808080",
    },
    hour: {
        top: 10,
        left: 36,
        fontSize: 18,
        color: "#808080",
    },
    provider: {
        padding: 10,
        fontSize: 25,
        height: 52,
        letterSpacing: 0.5,
        color: `#6495ed`,
        fontWeight: "bold",
    },
    category: {
        left: 11,
        fontSize: 15,
        height: 30,
        color: `#6495ed`,
        fontWeight: "bold",
    },
});