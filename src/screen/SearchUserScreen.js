import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


import FavoriteCategory from "../components/FavoriteCategory"
import FreeSearch from "../components/FreeSearch"
import AvailableAppointments from './AvailableAppointments'

const SearchUserScreen = props => {

    const [isFree, setIsFree] = useState(false);

    const [isRate, setIsRate] = useState(false);
    const [isCloser, setIsCloser] = useState(false);

    const onPressSearch = () => {
        props.navigation.navigate('AvailableAppointments');
    };

    return (
        <LinearGradient
            colors={['#003366', '#0080FF', '#3399FF', '#CCE5FF']}
            style={[{ height: "100%" }]}
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Hi Adi,</Text>
                    <Text style={styles.heading}>What service are you looking for?</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.search}>
                            <Text style={[styles.buttonSearch, !isFree && styles.shadow]} onPress={() => { setIsFree(false) }}>Advance Search</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.search}>
                            <Text style={[styles.buttonSearch, isFree && styles.shadow]} onPress={() => { setIsFree(true) }}>Free Search</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {(isFree) ? <FreeSearch navigation={props.navigation} /> : <FavoriteCategory navigation={props.navigation} />}
                    </View>

                    <Text style={styles.filter}>SORT BY</Text>
                    <View style={{ flexDirection: 'row', padding: 10, paddingBottom: 30, }}>
                        <TouchableOpacity onPress={() => { setIsRate(true); setIsCloser(false); }}>
                            <Text style={[styles.sortByRate, isRate && { backgroundColor: '#005500', color: 'white' }]}>Rating</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setIsCloser(true); setIsRate(false); }}>
                            <Text style={[styles.sortByTurn, isCloser && { backgroundColor: '#005500', color: 'white' }]}>closer meeting</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.searchButton} onPress={onPressSearch}>
                    <ImageBackground source={require('../../assets/vi2.png')} style={styles.vi}>
                        <Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
};

export default SearchUserScreen;

const styles = StyleSheet.create({
    container: {
        padding: 18,
    },
    heading: {
        fontSize: 24,
        color: 'white',
        fontWeight: '400',
        letterSpacing: 0.5,
        textShadowColor: 'rgba(255, 255, 255, 0.9)',
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 10,
    },
    search: {
        paddingTop: 40,
        paddingRight: 30,
    },
    buttonSearch: {
        fontSize: 15,
        borderRadius: 20,
        letterSpacing: 1,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 8,
        paddingBottom: 8,
        fontWeight: '500',
        color: 'white',
        shadowColor: "#0066CC",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    shadow: {
        shadowColor: "#E5CCFF",
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
    filter: {
        marginTop: 70,
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        letterSpacing: 1.5,
        textShadowColor: 'rgba(255, 255, 255, 1)',
        textShadowOffset: { width: 1, height: 2 },
        textShadowRadius: 10,
    },
    sortByRate: {
        backgroundColor: 'white',
        fontSize: 20,
        top: 20,
        width: 90,
        borderColor: 'gray',
        borderWidth: 0.7,
        borderRadius: 8,
        textAlign: 'center',
        height: 30,
    },
    sortByTurn: {
        backgroundColor: 'white',
        fontSize: 20,
        top: 20,
        width: 160,
        borderColor: 'gray',
        borderWidth: 0.7,
        borderRadius: 8,
        textAlign: 'center',
        marginLeft: 20,
        height: 30,
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