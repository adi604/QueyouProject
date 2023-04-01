import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
    useFonts,
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import FavoriteCategory from "../components/FavoriteCategory"
import FreeSearch from "../components/FreeSearch"
import AvailableAppointments from './AvailableAppointments'

const SearchUserScreen = props => {

    let [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light_Italic,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black_Italic,
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
            <ScrollView style={{ backgroundColor: 'rgba(0,0,0,0.2)', }}>
                <View style={styles.container}>
                    <View>
                        <View style={{ justifyContent: 'center', }}>
                            <Text style={[styles.heading, { fontSize: 40, fontWeight: '400', fontFamily: 'Montserrat_500Medium_Italic', }]}>Hey Adi,</Text>
                            <Text style={[styles.heading, { top: 35 }]}>What service are you looking for?</Text>
                            <View style={{ top: 30, width: "100%" }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', }}>
                                    <TouchableOpacity style={styles.search}>
                                        <View style={[!isFree && styles.shadow, { }]}>
                                            <Text style={[styles.buttonSearch, { shadowColor: "#0080FF", },]} onPress={() => { setIsFree(false) }}>Advance Search</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.search}>
                                        <View style={[isFree && styles.shadow, { }]}>
                                            <Text style={[styles.buttonSearch, { shadowColor: "#77BBFF" },]} onPress={() => { setIsFree(true) }}>Free Search</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[{ marginTop: 40, }]}>
                        {(isFree) ? <FreeSearch navigation={props.navigation} /> : <FavoriteCategory navigation={props.navigation} />}
                    </View>
                    <View style={styles.line}></View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={styles.filter}>SORT BY</Text>
                        <FontAwesome style={{ height: 30, width: 25, left: 15, top: 4 }} name="filter" size={25} color="white" />
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10, paddingBottom: 30, }}>
                        <TouchableOpacity style={[styles.squre, isAll && { backgroundColor: '#303f9f' }]} onPress={() => { setIsAll(true); setIsRate(false); setIsCloser(false); }}>
                            <Text style={[styles.sortBy]}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.squre, isRate && { backgroundColor: '#303f9f' }]} onPress={() => { setIsRate(true); setIsCloser(false); setIsAll(false); }}>
                            <Text style={[styles.sortBy]}>Rating</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.squre, isCloser && { backgroundColor: '#303f9f' }]} onPress={() => { setIsCloser(true); setIsRate(false); setIsAll(false); }}>
                            <Text style={[styles.sortBy]}>closer meeting</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.searchButton} onPress={onPressSearch}>
                        <Text style={{color: "#FFF", fontWeight: '600', fontSize: 18}}>view all businesses</Text>
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
        top: 25,
        marginTop: 10,
        fontSize: 18,
        color: 'white',
        left: 40,
        fontWeight: '500',
        fontFamily: 'Montserrat_700Bold_Italic',
    },
    search: {
        paddingTop: 40,
        marginLeft: "8%",
    },
    buttonSearch: {
        fontSize: 17.5,
        top: 8,
        height: 40,
        fontWeight: '500',
        color: 'white',
        fontFamily: 'Montserrat_700Bold',
        left: "8%",
    },
    shadow: {
        backgroundColor: "DDD",
        shadowColor: "#DDD",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
        borderRadius: 4,
        width: '120%',

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
        color: '#EEEEEE',
        fontSize: 18,
        textAlign: 'center',
        top: 2,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
    searchButton: {
        top: 20,
        height: 40,
        borderRadius: 10,
        width: "50%",
        marginBottom: 25,
        shadowColor: "#000",
        elevation: 5,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#2D87B8",
    },
    vi: {
        height: 60,
        width: 50,
        alignSelf: "center",
    },


});