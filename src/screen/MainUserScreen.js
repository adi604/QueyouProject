import { ViewPager, ScrollView, Dimensions, TouchableHighlight, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { NativeRouter, Route, Link } from "react-router-native";


const categories = [
    { label: 'Barber', value: '1' },
    { label: 'Dentist', value: '2' },
    { label: 'Cosmetic', value: '3' },
    { label: 'Ministry', value: '4' },
    { label: 'Driving lessons', value: '5' },
    { label: 'Pilates lessons', value: '6' },
];

const cities = [
    { label: 'Tel Aviv', value: '1' },
    { label: 'Ramat Gan', value: '2' },
    { label: 'Petah Tikva', value: '3' },
    { label: 'Modiin', value: '4' },
    { label: 'Beer Sheva', value: '5' },
    { label: 'Haifa', value: '6' },
];

const MainUserScreen = () => {
    const [barbershop, setBarbershop] = useState(false);
    const [bank, setBank] = useState(false);
    const [dentist, setDentist] = useState(false);
    const [cosmetician, setCosmetician] = useState(false);
    const [ministry, setMinistry] = useState(false);

    const [valueCity, setValueCity] = useState(null);
    const [isFocusCity, setIsFocusCity] = useState(false);
    const [isRate, setIsRate] = useState(false);
    const [isCloser, setIsCloser] = useState(false);


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>What service are you looking for?</Text>
                <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.search}>
                    <Text style={styles.buttonSearch}>Advance Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.search}>
                    <Text style={styles.buttonSearch}>Free Search</Text>
                </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight style={[styles.circle, barbershop && { backgroundColor: '#b0e0e6' }]}
                        underlayColor='#ccc'
                        onPress={() => { setBarbershop(true); setBank(false); setDentist(false); setCosmetician(false); }}>
                        <Text style={styles.textCircle}> Barbershop </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.circle, { marginLeft: 40 }, bank && { backgroundColor: '#b0e0e6' }]}
                        underlayColor='#ccc'
                        onPress={() => { setBank(true); setBarbershop(false); setDentist(false); setCosmetician(false); setMinistry(false); }}>
                        <Text style={styles.textCircle}> Bank </Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight style={[styles.circle, dentist && { backgroundColor: '#b0e0e6' }]}
                        underlayColor='#ccc'
                        onPress={() => { setDentist(true); setBank(false); setBarbershop(false); setCosmetician(false); setMinistry(false); }}>
                        <Text style={styles.textCircle}> Dentist </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.circle, { marginLeft: 40 }, cosmetician && { backgroundColor: '#b0e0e6' }]}
                        underlayColor='#ccc'
                        onPress={() => { setCosmetician(true); setBarbershop(false); setDentist(false); setBank(false); setMinistry(false); }}>
                        <Text style={styles.textCircle}> Ministry of Interior </Text>
                    </TouchableHighlight>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight style={[styles.circle, ministry && { backgroundColor: '#b0e0e6' }]}
                        underlayColor='#ccc'
                        onPress={() => { setMinistry(true); setBarbershop(false); setDentist(false); setBank(false); setCosmetician(false) }}>
                        <Text style={styles.textCircle}> Cosmetician </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.circle, { marginLeft: 40 }, ministry && { backgroundColor: '#b0e0e6' }]}
                        underlayColor='#ccc'
                        onPress={() => { setMinistry(true); setBarbershop(false); setDentist(false); setBank(false); setCosmetician(false) }}>
                        <Text style={styles.textCircle}> Cosmetician </Text>
                    </TouchableHighlight>
                </View>


                <View style={styles.section}>
                    <Dropdown
                        style={[styles.dropdown, isFocusCity && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={categories}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Select'}
                        searchPlaceholder="Search..."
                        value={valueCity}
                        onFocus={() => setIsFocusCity(true)}
                        onBlur={() => setIsFocusCity(false)}
                        onChange={item => {
                            setValueCity(item.value);
                            setIsFocusCity(false);
                        }}
                    />
                    <Text style={[styles.labelCat, isFocusCity && { color: 'blue' }]}>
                        More Categories
                    </Text>
                </View>
                <View style={styles.section}>
                    <Dropdown
                        style={[styles.dropdown, isFocusCity && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={cities}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Select'}
                        searchPlaceholder="Search..."
                        value={valueCity}
                        onFocus={() => setIsFocusCity(true)}
                        onBlur={() => setIsFocusCity(false)}
                        onChange={item => {
                            setValueCity(item.value);
                            setIsFocusCity(false);
                        }}
                    />
                    <Text style={[styles.labelCity, isFocusCity && { color: 'blue' }]}>
                        City
                    </Text>
                </View>
                <Text style={styles.filter}>SORT BY</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { setIsRate(true); setIsCloser(false); }}>
                        <Text style={[styles.sortByRate, isRate && { backgroundColor: '#0000cd', color: 'white' }]}>Rating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setIsCloser(true); setIsRate(false); }}>
                        <Text style={[styles.sortByTurn, isCloser && { backgroundColor: '#0000cd', color: 'white' }]}>closer meeting</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    );
};

export default MainUserScreen;

const styles = StyleSheet.create({
    container: {
        padding: 18,
        bottom: 20,
    },
    heading: {
        fontSize: 22,
        color: '#000080',
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
    circle: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.18,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#000080',
    },
    textCircle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
    },
    section: {
        marginTop: 50,
    },
    dropdown: {
        height: 60,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 0.7,
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    labelCat: {
        fontWeight: 'bold',
        backgroundColor: 'white',
        width: 130,
        paddingHorizontal: 8,
        fontSize: 14,
        bottom: 70,
        left: 15,
    },
    labelCity: {
        fontWeight: 'bold',
        backgroundColor: 'white',
        width: 42,
        paddingHorizontal: 8,
        fontSize: 14,
        bottom: 70,
        left: 15,
    },
    placeholderStyle: {
        fontSize: 16,
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
        borderRadius: 20,
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
        borderRadius: 20,
        textAlign: 'center',
        marginLeft: 20,
        height: 30,
    },
});