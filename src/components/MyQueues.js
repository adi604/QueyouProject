import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';


const MyQueues = props => {

    const queues = [
        { provider: "Devin", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30" },
        { provider: "Devin", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30" },
        { provider: "Devin", category: "Barbar", day: "sunday", date: "31.1.2023", hour: "14:30" },
    ];


    return (
        <View style={[{backgroundColor: "white"}]}>
            <FlatList
                data={queues}
                renderItem={({ item }) =>
                    <View>
                        <View style={{ flexDirection: 'row' , padding: 7,}}>
                            <View style={styles.verticalLine} />
                            <View style={styles.circle} />
                            <View style={[{left: 16}]}>
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


export default MyQueues


const styles = StyleSheet.create({
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
        top: 40,
        borderRadius: "50%",
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