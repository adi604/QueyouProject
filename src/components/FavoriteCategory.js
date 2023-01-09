import { Dimensions, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const FavoriteCategory = props => {

    const [barbershop, setBarbershop] = useState(false);
    const [bank, setBank] = useState(false);
    const [dentist, setDentist] = useState(false);
    const [cosmetician, setCosmetician] = useState(false);
    const [ministry, setMinistry] = useState(false);
    const [valueCat, setValueCat] = useState(null);
    const [valueCity, setValueCity] = useState(null);
    const [isFocusCity, setIsFocusCity] = useState(false);
    const [isFocusCat, setIsFocusCat] = useState(false);

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

    return (
        <View>
            <View style={{ flexDirection: 'row', left: 10, }}>
                <TouchableHighlight style={[styles.square, barbershop && { backgroundColor: '#FFFFFF' }]}
                    underlayColor='#ccc'
                    onPress={() => { setBarbershop(true); setBank(false); setDentist(false); setCosmetician(false); setMinistry(false); }}>
                    <Text style={barbershop ? styles.textSquarepressed : styles.textSquare}> Barbershop </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.square, { marginLeft: 20 }, bank && { backgroundColor: '#FFFFFF' }]}
                    underlayColor='#ccc'
                    onPress={() => { setBank(true); setBarbershop(false); setDentist(false); setCosmetician(false); setMinistry(false); }}>
                    <Text style={bank ? styles.textSquarepressed : styles.textSquare}> Bank </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.square, { marginLeft: 20 }, dentist && { backgroundColor: '#FFFFFF' }]}
                    underlayColor='#ccc'
                    onPress={() => { setDentist(true); setBank(false); setBarbershop(false); setCosmetician(false); setMinistry(false); }}>
                    <Text style={dentist ? styles.textSquarepressed : styles.textSquare}> Dentist </Text>
                </TouchableHighlight>
            </View>
            <View style={{ flexDirection: 'row', left: 70, }}>
                <TouchableHighlight style={[styles.square, cosmetician && { backgroundColor: '#FFFFFF' }]}
                    underlayColor='#ccc'
                    onPress={() => { setCosmetician(true); setBarbershop(false); setDentist(false); setBank(false); setMinistry(false); }}>
                    <Text style={cosmetician ? styles.textSquarepressed : styles.textSquare}> Cosmetic </Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.square, { marginLeft: 20 }, ministry && { backgroundColor: '#FFFFFF' }]}
                    underlayColor='#ccc'
                    onPress={() => { setMinistry(true); setBarbershop(false); setDentist(false); setBank(false); setCosmetician(false); }}>
                    <Text style={ministry ? styles.textSquarepressed : styles.textSquare}> Ministry of Interior</Text>
                </TouchableHighlight>
            </View>

            <View style={styles.section}>
                <Dropdown
                    style={[styles.dropdown, isFocusCat && { borderColor: 'white' }]}
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
                    value={valueCat}
                    onFocus={() => setIsFocusCat(true)}
                    onBlur={() => setIsFocusCat(false)}
                    onChange={item => {
                        setValueCat(item.value);
                        setIsFocusCat(false);
                    }}
                />
                <Text style={[styles.labelCat]}>
                    More Categories
                </Text>
            </View>
            <View style={styles.section}>
                <Dropdown
                    style={[styles.dropdown, isFocusCity && { borderColor: 'white' }]}
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
                    placeholderTextColor="white"
                    searchPlaceholder="Search..."
                    value={valueCity}
                    onFocus={() => setIsFocusCity(true)}
                    onBlur={() => setIsFocusCity(false)}
                    onChange={item => {
                        setValueCity(item.value);
                        setIsFocusCity(false);
                    }}
                />
                <Text style={[styles.labelCity]}>
                    City
                </Text>
            </View>
        </View>
    )
};


export default FavoriteCategory


const styles = StyleSheet.create({
    square: {
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.2,
        backgroundColor: '#4169e1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 20,
    },
    textSquarepressed: {
        fontWeight: '500',
        color: '#001933',
        fontSize: 17,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    textSquare: {
        fontWeight: '500',
        color: 'white',
        fontSize: 17,
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    section: {
        top: 50,
        marginTop: 20,
    },
    dropdown: {
        height: 55,
        borderColor: 'white',
        borderWidth: 0.7,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: 'white',
    },
    labelCat: {
        fontWeight: 'bold',
        backgroundColor: 'gray',
        width: 130,
        paddingHorizontal: 8,
        fontSize: 14,
        bottom: 65,
        left: 15,
        borderRadius: 8,
        color: 'white',
    },
    labelCity: {
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'gray',
        width: 42,
        paddingHorizontal: 8,
        fontSize: 14,
        bottom: 65,
        left: 15,
        borderRadius: 8,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'white',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'white',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
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
});