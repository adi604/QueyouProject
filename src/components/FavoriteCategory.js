import { ImageBackground, Dimensions, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { LinearGradient } from 'expo-linear-gradient';

const FavoriteCategory = props => {

    const [barbershop, setBarbershop] = useState(false);
    const [bank, setBank] = useState(false);
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
        <View style={{top: 30, alignSelf: 'center',}}>
            <View style={{ flexDirection: 'row', left: 125, bottom: 10,}}>
                <TouchableHighlight style={[styles.circle4, barbershop && { backgroundColor: '#CCE5FF' }]}
                    onPress={() => { setBarbershop(true); setCosmetician(false); setBank(false); setMinistry(false); }}>
                    <LinearGradient
                        colors={['#c5b3e5', '#9575cd',]}
                        style={{width: '100%', height: '100%', borderRadius: 80, elevation: 30, shadowColor: '#000',}}
                        start={{ x: 1, y:  0}}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={[styles.textSquare, {top: 35, left: 6,}]}> Barbar </Text>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
            <View style={{ flexDirection: 'row', left: 27, }}>
                <TouchableHighlight style={[styles.circle1, ministry && { backgroundColor: '#CCE5FF' }]}
                    onPress={() => { setMinistry(true); setCosmetician(false); setBank(false); setBarbershop(false); }}>
                    <LinearGradient
                        colors={['#FFFFFF', '#99E5C6', '#7bdcb5', '#54BF94']}
                        style={{width: '100%', height: '100%', borderRadius: 80, elevation: 30, shadowColor: '#000'}}
                        start={{ x: 1, y:  0}}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.textSquare}> Ministry </Text>
                    </LinearGradient>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.circle2, bank && { backgroundColor: '#CCE5FF' }]}
                    onPress={() => { setBank(true); setBarbershop(false); setMinistry(false); setCosmetician(false); }}>
                    <LinearGradient
                        colors={['#FFD9B7', '#FA9567', '#ff6a65' , ]}
                        style={{width: '100%', height: '100%', borderRadius: 80, elevation: 30, shadowColor: '#000',}}
                        start={{ x: 1, y:  0}}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={[styles.textSquare, {top: 60, left: 28,}]}> Bank </Text>
                    </LinearGradient>
                </TouchableHighlight>
            </View>
            <View style={{ flexDirection: 'row', left: 115,}}>
                <TouchableHighlight style={[styles.circle3, cosmetician && { backgroundColor: '#CCE5FF' }]}
                    onPress={() => { setCosmetician(true); setBarbershop(false); setBank(false); setMinistry(false); }}>
                    <LinearGradient
                        colors={['#9575cd', '#64b5f6',]}
                        style={{width: '100%', height: '100%', borderRadius: 80, elevation: 30, shadowColor: '#000',}}
                        start={{ x: 1, y:  0}}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={[styles.textSquare, {top: 58, left: 22,}]}> Cosmetic </Text>
                    </LinearGradient>
                </TouchableHighlight>
            </View>


            <View style={styles.more}>
            <View style={[styles.section, {bottom: 20}]}>
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
    circle1: {
        width: Dimensions.get('window').width * 0.33,
        height: Dimensions.get('window').width * 0.33,
        backgroundColor: '#FFF',
        borderRadius: 80,
        shadowColor: "#000",
        elevation: 20,
        bottom: 80,
        right: 20,
    },
    circle2: {
        width: Dimensions.get('window').width * 0.38,
        height: Dimensions.get('window').width * 0.38,
        backgroundColor: '#FFF',
        bottom: 93,
        borderRadius: 100,
        shadowColor: "#000",
        elevation: 20,
        marginLeft: 40
    },
    circle3: {
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').width * 0.35,
        backgroundColor: '#FFF',
        borderRadius: 80,
        shadowColor: "#000",
        elevation: 20,
        bottom: 155,
    },
    circle4: {
        width: Dimensions.get('window').width * 0.26,
        height: Dimensions.get('window').width * 0.26,
        backgroundColor: '#FFF',
        borderRadius: 80,
        shadowColor: "#000",
        elevation: 20,
        bottom: 15,
        right: 10,
    },
    textSquarepressed: {
        fontWeight: '500',
        color: '#001933',
        fontSize: 17,
        bottom: 45,
        letterSpacing: 0.5,
        height: 100,
        width: 100,
        textAlign: 'center',
        right: 5,
    },
    textSquare: {
        color: 'white',
        fontSize: 20,
        top: 50,
        left: 23,
        letterSpacing: 0.5,
        height: 100,
        width: 100,
        textAlign: 'center',
        fontFamily: 'GentiumPlus_700Bold'
    },
    more: {
        width: 350,
        backgroundColor: '#f5fcff',
        alignSelf: 'center',
        padding: 40,
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        elevation: 10,
        bottom: 110
    },
    section: {
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