import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


import FavoriteCategory from "../components/FavoriteCategory"
import FreeSearch from "../components/FreeSearch"
import AvailableAppointments from './AvailableAppointments'

const SearchUserScreen = props => {

    const [isFree, setIsFree] = useState(false);

    const [isAll, setIsAll] = useState(true);
    const [isRate, setIsRate] = useState(false);
    const [isCloser, setIsCloser] = useState(false);

    const onPressSearch = () => {
        props.navigation.navigate('AvailableAppointments');
    };

    return (

        <ScrollView style={{ backgroundColor: '#f0f8ff' }}>
            <View style={styles.container}>
                <View>
                    <LinearGradient
                        colors={['#64b5f6', '#9575cd']}
                        style={{
                            width: 415, height: 200, right: 20, padding: 20, bottom: 18, elevation: 30,
                            shadowColor: '#52006A',
                        }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >
                        <Text style={[styles.heading, { fontSize: 30, fontWeight: '400', letterSpacing: 0.5, width: 130 }]}>Hey Adi,</Text>
                        <Text style={[styles.heading, { top: 35 }]}>What service are you looking for?</Text>
                        <View style={{ flexDirection: 'row', top: 20 }}>
                            <TouchableOpacity style={styles.search}>
                                <Text style={[styles.buttonSearch, { shadowColor: "#0080FF" }, !isFree && styles.shadow]} onPress={() => { setIsFree(false) }}>Advance Search</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.search}>
                                <Text style={[styles.buttonSearch, { shadowColor: "#77BBFF" }, isFree && styles.shadow]} onPress={() => { setIsFree(true) }}>Free Search</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            backgroundColor: '#9575cd',
                            width: 450, height: 1, top: 30, shadowColor: '#000', shadowOffset: { width: 1, height: 1 },
                            shadowOpacity: 0.4,
                            shadowRadius: 3,
                            elevation: 20,
                        }}>
                        </View>
                    </LinearGradient>
                </View>
                <View>
                    {(isFree) ? <FreeSearch navigation={props.navigation} /> : <FavoriteCategory navigation={props.navigation} />}
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.filter}>SORT BY</Text>
                    <Image style={{ height: 30, width: 25, top: 40, left: 10, }} source={require('./../../assets/sorting.png')}></Image>
                </View>
                <View style={{ flexDirection: 'row', padding: 10, paddingBottom: 30, }}>
                    <TouchableOpacity style={[styles.squre, isAll && { backgroundColor: '#FA9567'}]} onPress={() => { setIsAll(true); setIsRate(false); setIsCloser(false); }}>
                        <Text style={[styles.sortBy]}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.squre, isRate && { backgroundColor: '#FA9567'}]} onPress={() => { setIsRate(true); setIsCloser(false); setIsAll(false); }}>
                        <Text style={[styles.sortBy]}>Rating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.squre, isCloser && { backgroundColor: '#FA9567'}]} onPress={() => { setIsCloser(true); setIsRate(false); setIsAll(false); }}>
                        <Text style={[styles.sortBy]}>closer meeting</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.searchButton} onPress={onPressSearch}>
                    <ImageBackground source={require('../../assets/vi2.png')} style={styles.vi}>
                        <Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

export default SearchUserScreen;

const styles = StyleSheet.create({
    container: {
        padding: 18,
        backgroundColor: '#f0f8ff',
    },
    heading: {
        top: 30,
        fontSize: 18,
        color: 'white',
        left: 40,
        fontWeight: '500',
        letterSpacing: 0.3,
    },
    search: {
        paddingTop: 40,
        paddingRight: 30,
    },
    buttonSearch: {
        fontSize: 16,
        height: 40,
        letterSpacing: 1,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 8,
        paddingBottom: 8,
        fontWeight: '500',
        color: 'white',
    },
    shadow: {
        backgroundColor: "DDD",
        shadowColor: "#DDD",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
        borderRadius: 4,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    line: {
        backgroundColor: '#d1d1d1',
        height: 2,
        marginTop: -20,
    },
    filter: {
        marginTop: 40,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        letterSpacing: 0.2,
    },
    squre: {
        backgroundColor: '#a1a1a1',
        height: 30,
        top: 20,
        marginRight: 25,
        borderRadius: 15,
        width: 100,
    },
    sortBy: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        top: 2,
    },
    searchButton: {
        top: 10,
        left: 150,
        height: 100,
        borderRadius: 50,
        width: 105,
        marginBottom: 25,
        shadowColor: "#FFF",
        elevation: 20,
        justifyContent: "center",
    },
    vi: {
        height: 70,
    },


});