import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import {
    useFonts,
    GentiumPlus_400Regular,
    GentiumPlus_400Regular_Italic,
    GentiumPlus_700Bold,
    GentiumPlus_700Bold_Italic,
} from '@expo-google-fonts/gentium-plus';
import AppLoading from 'expo-app-loading';

import FavoriteCategory from "../components/FavoriteCategory"
import FreeSearch from "../components/FreeSearch"
import AvailableAppointments from './AvailableAppointments'

const SearchUserScreen = props => {

    let [fontsLoaded] = useFonts({
        GentiumPlus_400Regular,
        GentiumPlus_700Bold,
    });

    const [isFree, setIsFree] = useState(false);

    const [isAll, setIsAll] = useState(true);
    const [isRate, setIsRate] = useState(false);
    const [isCloser, setIsCloser] = useState(false);

    const onPressSearch = () => {
        props.navigation.navigate('AvailableAppointments');
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ImageBackground
            source={require('./../../assets/logo7.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
            blurRadius={5}
        >
            <ScrollView style={{backgroundColor: 'rgba(0,0,0,0.2)',}}>
                <View style={styles.container}>
                    <View>
                        <View style={{justifyContent: 'center', }}>
                            <Text style={[styles.heading, { fontSize: 30, fontWeight: '400', letterSpacing: 0.5, width: 130, fontFamily: 'GentiumPlus_700Bold', }]}>Hey Adi,</Text>
                            <Text style={[styles.heading, { top: 35 }]}>What service are you looking for?</Text>
                            <View style={{ flexDirection: 'row', top: 20, right: 10 }}>
                                <TouchableOpacity style={styles.search}>
                                    <Text style={[styles.buttonSearch, { shadowColor: "#0080FF" }, !isFree && styles.shadow]} onPress={() => { setIsFree(false) }}>Advance Search</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.search}>
                                    <Text style={[styles.buttonSearch, { shadowColor: "#77BBFF" }, isFree && styles.shadow]} onPress={() => { setIsFree(true) }}>Free Search</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[{ marginTop: 30,}]}>
                        {(isFree) ? <FreeSearch navigation={props.navigation} /> : <FavoriteCategory navigation={props.navigation} />}
                    </View>
                    <View style={styles.line}></View>
                    <View style={{ flexDirection: 'row' , marginTop: 20}}>
                        <Text style={styles.filter}>SORT BY</Text>
                        <FontAwesome style={{ height: 30, width: 25, left: 15, top: 4 }} name="filter" size={25} color="white" />
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10, paddingBottom: 30, }}>
                        <TouchableOpacity style={[styles.squre, isAll && { backgroundColor: '#FA9567' }]} onPress={() => { setIsAll(true); setIsRate(false); setIsCloser(false); }}>
                            <Text style={[styles.sortBy]}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.squre, isRate && { backgroundColor: '#FA9567' }]} onPress={() => { setIsRate(true); setIsCloser(false); setIsAll(false); }}>
                            <Text style={[styles.sortBy]}>Rating</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.squre, isCloser && { backgroundColor: '#FA9567' }]} onPress={() => { setIsCloser(true); setIsRate(false); setIsAll(false); }}>
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
        </ImageBackground>
    );
};

export default SearchUserScreen;

const styles = StyleSheet.create({
    container: {
        padding: 18,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    heading: {
        top: 30,
        fontSize: 19,
        color: 'white',
        left: 40,
        fontWeight: '500',
        letterSpacing: 0.3,
        fontFamily: 'GentiumPlus_400Regular',
    },
    search: {
        paddingTop: 40,
        paddingRight: 30,
    },
    buttonSearch: {
        fontSize: 18,
        height: 40,
        letterSpacing: 1,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 8,
        fontWeight: '500',
        color: 'white',
        fontFamily: 'GentiumPlus_700Bold',
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
        marginTop: 30,
    },
    filter: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 0.2,
    },
    squre: {
        backgroundColor: '#fff',
        height: 30,
        top: 20,
        marginRight: 25,
        borderRadius: 15,
        width: 100,
    },
    sortBy: {
        color: '#252525',
        fontSize: 18,
        textAlign: 'center',
        top: 2,
        fontWeight: 'bold',
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