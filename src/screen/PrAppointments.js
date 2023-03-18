import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Svg, { Path } from "react-native-svg";

const PrAppointments = props => {

    const queues = [
        { providerName: "Provider1", customerName: "Customer 1", dateAndTime: "05.05.2023 12:00"},
        { providerName: "Provider1", customerName: "Customer 2", dateAndTime: "05.05.2023 13:00"},
        { providerName: "Provider1", customerName: "Customer 3", dateAndTime: "06.05.2023 10:00"},
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
                    <Text style={styles.heading}>My Appointments</Text>
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
                                <Text style={styles.date}>{item.dateAndTime}</Text>

                                <View style={{ flexDirection: 'row'}}>
                                    <Text style={styles.customer}>{item.customerName}</Text>
                                    <TouchableOpacity>
                                        <Svg top={10} left={150} width={30} height={30} viewBox="0 0 20 20" fill="none" {...props}>
                                            <Path
                                                d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                                                fill="#404040"
                                            />
                                        </Svg>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ top: 5, right: 25, width: 500, height: 1, backgroundColor: `#808080`, }} />
                            </View>
                        </View>
                    </View>}
            />
        </View>
    )
};


export default PrAppointments


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
        backgroundColor: `#9999ff`,
        height: "90%",

    },
    circle: {
        width: 15,
        height: 15,
        right: 1,
        top: 45,
        borderRadius: 50,
        backgroundColor: `#9999ff`,
    },
    date: {
        top: 10,
        fontSize: 18,
        left: 10,
        color: "#808080",

    },
    customer: {
        padding: 10,
        fontSize: 25,
        height: 52,
        letterSpacing: 0.5,
        color: `#9999ff`,
        fontWeight: "bold",
    },
});