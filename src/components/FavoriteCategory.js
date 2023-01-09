import { ImageBackground, Dimensions, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
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
            <View style={{ flexDirection: 'row', left: 35, }}>
                <TouchableHighlight style={[styles.square, barbershop && { backgroundColor: '#CCE5FF' }]}
                    onPress={() => { setBarbershop(true); setBank(false); setDentist(false); setCosmetician(false); setMinistry(false); }}>
                    <ImageBackground source={require('../../assets/barbar.png')} style={styles.icon}>
                        <Text style={barbershop ? styles.textSquarepressed : styles.textSquare}> Barbershop </Text>
                    </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.square, { marginLeft: 20 }, bank && { backgroundColor: '#CCE5FF' }]}
                    onPress={() => { setBank(true); setBarbershop(false); setDentist(false); setCosmetician(false); setMinistry(false); }}>
                    <ImageBackground source={require('../../assets/bank.png')} style={styles.icon}>
                        <Text style={bank ? styles.textSquarepressed : styles.textSquare}> Bank </Text>
                    </ImageBackground>
                </TouchableHighlight>
            </View>
            <View style={{ flexDirection: 'row', left: 35, }}>
                <TouchableHighlight style={[styles.square, cosmetician && { backgroundColor: '#CCE5FF' }]}
                    onPress={() => { setCosmetician(true); setBarbershop(false); setDentist(false); setBank(false); setMinistry(false); }}>
                    <ImageBackground source={require('../../assets/cosmetic.png')} style={styles.icon}>
                        <Text style={cosmetician ? styles.textSquarepressed : styles.textSquare}> Cosmetic </Text>
                    </ImageBackground>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.square, { marginLeft: 20 }, ministry && { backgroundColor: '#CCE5FF' }]}
                    onPress={() => { setMinistry(true); setBarbershop(false); setDentist(false); setBank(false); setCosmetician(false); }}>
                    <ImageBackground source={require('../../assets/interior.png')} style={styles.icon}>
                        <Text style={ministry ? styles.textSquarepressed : styles.textSquare}> Ministry of Interior</Text>
                    </ImageBackground>
                </TouchableHighlight>
            </View>
            <View style={{ flexDirection: 'row', left: 35, }}>
                <TouchableHighlight style={[styles.square, dentist && { backgroundColor: '#CCE5FF' }]}
                    onPress={() => { setDentist(true); setBank(false); setBarbershop(false); setCosmetician(false); setMinistry(false); }}>
                    <ImageBackground source={require('../../assets/dentist.png')} style={styles.icon}>
                        <Text style={dentist ? styles.textSquarepressed : styles.textSquare}> Dentist </Text>
                    </ImageBackground>
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
                    placeholder={'More Categories'}
                    searchPlaceholder="Search..."
                    value={valueCat}
                    onFocus={() => setIsFocusCat(true)}
                    onBlur={() => setIsFocusCat(false)}
                    onChange={item => {
                        setValueCat(item.value);
                        setIsFocusCat(false);
                    }}
                />
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
                    placeholder={'City'}
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
            </View>
        </View>
    )
};


export default FavoriteCategory


const styles = StyleSheet.create({
    icon: {
        top: 30,
        left: 20,
        height: 90,
        width: 90,
    },
    square: {
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').width * 0.33,
        backgroundColor: '#FFF',
        padding: 10,
        marginTop: 18,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    textSquarepressed: {
        fontWeight: '500',
        color: '#001933',
        fontSize: 17,
        bottom: 35,
        letterSpacing: 0.5,
        height: 100,
        width: 100,
        textAlign: 'center',
        right: 5,
    },
    textSquare: {
        fontWeight: '500',
        color: 'gray',
        fontSize: 17,
        bottom: 35,
        letterSpacing: 0.5,
        height: 100,
        width: 100,
        textAlign: 'center',
        right: 5,
    },
    section: {
        top: 50,
        marginTop: 20,
    },
    dropdown: {
        height: 55,
        borderRadius: 8,
        paddingHorizontal: 12,
        color: 'white',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 20,
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
        color: 'black',
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
        color: '#001933',
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#001933',
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