import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const MyAppointments = props => {

    const [isPast, setIsPast] = useState(false);
    const [isFree, setIsFree] = useState(false);

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
                    colors={['#64b5f6', '#6CC3ED', '#6CC3ED']}
                    style={{
                        width: 450, height: 150, right: 20, padding: 20, bottom: 18,
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={{ flexDirection: 'row', alignSelf: "center", padding: 20, top: 20, }}>
                        <Text style={styles.heading}>My Appointment</Text>
                        <AntDesign style={{ top: 3, left: 10 }} name="calendar" size={24} color="white" />
                    </View>
                    <View style={{ height: 1, marginTop: 15, backgroundColor: "#DDD", shadowColor: '#FFF', elevation: 10 }}></View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                        <TouchableOpacity style={[styles.filter, !isPast && styles.underLine]}>
                            <Text style={[styles.textFilter]} onPress={() => { setIsPast(false) }}>UPCOMING</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.filter, isPast && styles.underLine]}>
                            <Text style={[styles.textFilter]} onPress={() => { setIsPast(true) }}>PAST</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#6CC3ED', height: 1, shadowColor: '#000', elevation: 10, }}></View>
                </LinearGradient>
            </View>
            <FlatList
                data={queues}
                renderItem={({ item }) =>
                    <TouchableOpacity style={{}} onPress={() => props.navigation.navigate('ADNevigator')}>
                        <View style={styles.box}>
                            <View style={{ flexDirection: 'row', padding: 7, }}>
                                <View style={{ flexDirection: 'column', width: 60 }}>
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
                                        <FontAwesome5 style={{ transform: [{ rotate: '30deg' }], bottom: 30, right: 10 }} name="thumbtack" size={32} color="red" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>}
            />
            <LinearGradient
                colors={['#ff6a65', '#f3afbf']}
                style={styles.addbtn}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <TouchableOpacity style={styles.btn} onPress={onPressAdd}>
                    <Text style={{ fontSize: 30, color: 'white' }}>+</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
};


export default MyAppointments


const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        alignSelf: "center",
        textAlign: "center",
        color: 'white',
        fontFamily: 'Montserrat_700Bold',
    },
    filter: {
        width: "50%",
        alignSelf: "center",
    },
    textFilter: {
        height: 40,
        padding: 10,
        fontSize: 17.5,
        fontWeight: '500',
        color: 'white',
        fontFamily: 'Montserrat_700Bold',
        alignSelf: "center",
    },
    underLine: {
        borderBottomColor: '#FFF',
        borderBottomWidth: 2,
        bottom: 1,
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
        elevation: 10,
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