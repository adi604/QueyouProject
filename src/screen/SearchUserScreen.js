import {ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';


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
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>What service are you looking for?</Text>
                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.search}>
                    <Text style= {[styles.buttonSearch, !isFree && styles.shadow]} onPress={() => { setIsFree(false)}}>Advance Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.search}>
                    <Text style={[styles.buttonSearch, isFree && styles.shadow]} onPress={() => { setIsFree(true)}}>Free Search</Text>
                </TouchableOpacity>
                </View>
                <View>
                    {(isFree) ? <FreeSearch navigation={props.navigation} /> : <FavoriteCategory navigation={props.navigation} />}
                 </View>


                <Text style={styles.filter}>SORT BY</Text>
                <View style={{ flexDirection: 'row' , padding: 10 , paddingBottom: 30,}}>
                    <TouchableOpacity onPress={() => { setIsRate(true); setIsCloser(false); }}>
                        <Text style={[styles.sortByRate, isRate && { backgroundColor: '#0000cd', color: 'white' }]}>Rating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setIsCloser(true); setIsRate(false); }}>
                        <Text style={[styles.sortByTurn, isCloser && { backgroundColor: '#0000cd', color: 'white' }]}>closer meeting</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity  style={styles.searchButton} onPress={onPressSearch}>
                <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
        </ScrollView>

    );
};

export default SearchUserScreen;

const styles = StyleSheet.create({
    container: {
        padding: 18,
        bottom: 20,
    },
    heading: {
        fontSize: 22,
        color: '#4169e1',
        paddingTop: 40,
        bottom: 10,
        fontWeight: 'bold',
        letterSpacing: 0.1,
        textAlign: 'center',
    },
    search: {
        paddingTop: 20,
        paddingRight: 30,
    },
    buttonSearch: {
        fontSize: 18,
        borderBottomWidth: 1.2,
        letterSpacing: 1,
        padding: 10,
        fontWeight: 'bold',
    },
    shadow: {
        textShadowColor: 'rgba(30, 90, 200, 0.7)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5,
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
        fontSize: 22,
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
        left: 130,
        height: 40,
        borderRadius: 8,
        width: 170,
        backgroundColor: `#4169e1`,
        bottom: 20,
    },
    searchText: {
        textAlign: "center",
        top: 4,
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
    },

    
});