import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import Star from "./Star";

const Reviews = props => {

    const reviews = [
        { provider: "Devin1", category: "Barbar", grade: "5.0", text: "They’ve usually had some experience with this company, which could include a purchase, use, or a conversation.", date: "22/12/21"},
        { provider: "Devin2", category: "Barbar", text: "They’ve usually had some experience with this company, which could include a purchase, use, or a conversation." },
        { provider: "Devin3", category: "Barbar", text: "They’ve usually had some experience with this company, which could include a purchase, use, or a conversation." },
        { provider: "Devin4", category: "Barbar", text: "They’ve usually had some experience with this company, which could include a purchase, use, or a conversation." },
        { provider: "Devin5", category: "Barbar", text: "They’ve usually had some experience with this company, which could include a purchase, use, or a conversation." },
        { provider: "Devin6", category: "Barbar", text: "They’ve usually had some experience with this company, which could include a purchase, use, or a conversation." },
        { provider: "Devin7", category: "Barbar", text: "They’ve usually had some experience with this company, which could include a purchase, use, or a conversation." },
        { provider: "Devin8", category: "Barbar", text: "They’ve usually had some experience with this company, which could include a purchase, use, or a conversation." },
    ];

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

    const onPressSchedule = () => {
        props.navigation.navigate('CalendarPickerScreen');
    };

    const onPressReview = () => {
        props.navigation.navigate('Reviews');
    };

    return (
        <View style={styles.container}>
            <View style={styles.reviewContainer}>
                <Text style={styles.title}>Reviews</Text>
                <View style={styles.totalWrap}>
                    <View style={{ flexDirection: "row", }}>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </View>
                    <Text>3 out of 5</Text>
                </View>
                <Text style={styles.amountText}>Avarage rate by 40 customers</Text>
                
            </View>
            <FlatList style={[{ marginTop: 70 }]}
                data={reviews}
                renderItem={({ item }) =>
                    <View style={styles.box}>
                        <View style={[{ flexDirection: 'row' }]}>
                            <Image style={[{ left: 10, height: 45, width: 45, top: 10 }]} source={require('../../assets/person.png')}></Image>
                            <View style={[{ left: 20, bottom: 20, padding: 8 }]}>
                                <Text style={styles.provider}>{item.provider}</Text>
                                <View style={[{ flexDirection: 'row', right: 5, }]}>
                                    <Star />
                                    <Text style={styles.grade}>{item.grade}</Text>
                                </View>
                                <Text style={styles.text}>{item.text}</Text>
                            </View>
                            <Text style={{ right: 100, top: 40, color: '#696969', fontSize: 15, fontWeight: '500' }}>{item.date}</Text>
                        </View>
                    </View>}
            />


        </View>
    );
};

export default Reviews;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F8FF",
        borderRadius: 10,
        width: "100%",
        right: 13,
        marginBottom: 10,
        marginTop: 5,
        height: '100%'
    },
    reviewContainer: {
        backgroundColor: "#FFFFFF",
        height: 200,
        width: '90%',
        borderRadius: 20,
        paddingHorizontal: 25,
        paddingVertical: 40,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1.0,
        shadowRadius: 2,
        elevation: 20,
        top: 50,
        left: 35,
    },
    title: {
        bottom: 20,
        fontWeight: "500",
        fontSize: 30,
        color: "#000",
        textAlign: "center",
    },
    totalWrap: {
        width: 230,
        bottom: 10,
        left: 20,
        marginBottom: 5,
        backgroundColor: "#F5F8FF",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    amountText: {
        fontSize: 16,
        color: "#595B71",
        textAlign: "center",
        fontWeight: "bold",
    },
    progressPercentText: {
        width: 40,
        fontSize: 14,
        color: "#323357"
    },
    progressMiddle: {
        height: 15,
        flex: 1,
        marginHorizontal: 10,
    },
    progressWrap: {
        backgroundColor: "#F5F8FF",
        borderRadius: 18,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        padding: 2,
    },
    progressBar: {
        flex: 1,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "#ffcc48",
        shadowOpacity: 1.0,
        shadowRadius: 4,
        backgroundColor: "#FFCC48",
        borderRadius: 18,
        minWidth: 5,
    },
    box: {
        // backgroundColor: '#FFF',
        // shadowColor: "#000",
        // elevation: 15,
        height: 130,
        width: '85%',
        left: 45,
        borderRadius: 18,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
    },
    provider: {
        fontSize: 20,
        height: 52,
        color: `#505050`,
        fontWeight: "bold",
        top: 20,
    },
    grade: {
        fontSize: 16,
        fontWeight: "bold",
        left: 8,
    },
    text: {
        fontSize: 14,
        height: 50,
        width: 300,
        color: `#808080`,
        top: 5,
        right: 60
    },
    locationbtn: {
        height: 28,
        width: 28,
        left: 3,
        bottom: 5,
    },
    reviews: {
        fontSize: 16,
        color: '#0066CC',
        fontWeight: '500',
        top: 60,
        left: 20,

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
        top: '12%',
        left: '30%',
    },
});