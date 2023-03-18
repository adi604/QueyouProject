import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const MyAppointment = props => {

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
        <View style={{ backgroundColor: '#faffff', height: '110%' }}>
            <View>
                <LinearGradient
                    colors={['#64b5f6', '#9575cd']}
                    style={{
                        width: 450, height: 120, right: 20, padding: 20, bottom: 18, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.4,
                        shadowRadius: 3,
                        elevation: 5,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.heading}>My Appointment</Text>
                        <Image style={{ height: 28, width: 28, top: 40, left: 150}} source={require('./../../assets/calender3.png')}></Image>
                    </View>
                    <View style={{
                        backgroundColor: '#9575cd',
                        width: 450, height: 1, top: 30, shadowColor: '#000', shadowOffset: { width: -2, height: 5 },
                        shadowOpacity: 0.4,
                        shadowRadius: 3,
                        elevation: 10,
                    }}>
                    </View>
                </LinearGradient>
            </View>
            <FlatList
                data={queues}
                renderItem={({ item }) =>
                    <View style={styles.box}>
                        <View style={{ flexDirection: 'row', padding: 7, }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Image style={styles.icon} source={item.icon}></Image>
                                <Text style={styles.category}>{item.category}</Text>
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
                    </View>}
            />
            <LinearGradient
                    colors={['#ff6a65', '#f3afbf']}
                    style={styles.addbtn}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
            <TouchableOpacity style={styles.btn} onPress={onPressAdd}>
                <Text style={{fontSize: 30, color: 'white'}}>+</Text>
            </TouchableOpacity>
            </LinearGradient>
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
        fontWeight: '500',
    },
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
    box: {
        backgroundColor: '#FFF',
        shadowColor: "#000",
        elevation: 15,
        height: 100,
        marginTop: 5,
        width: 370,
        left: 20,
        borderRadius: 2,
        marginBottom: 25,
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
        fontSize: 12,
        left: 35,
        fontWeight: '600',
        color: "#c0c0c0",

    },
    day: {
        bottom: 8,
        left: 10,
        fontSize: 16,
        color: "#c0c0c0",
        fontWeight: '400',

    },
    hour: {
        bottom: 8,
        left: 14,
        fontSize: 16,
        fontWeight: '400',
        color: "#c0c0c0",
    },
    provider: {
        top: 7,
        padding: 10,
        fontSize: 20,
        height: 50,
        color: `#696969`,
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