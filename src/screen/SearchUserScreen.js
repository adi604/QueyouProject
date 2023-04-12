import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { Searchbar } from 'react-native-paper';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

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


const SearchList = ({ categories, valueCat, setValueCat }) => {
    return (
        <Dropdown
            style={[styles.dropdown,]}
            placeholderStyle={{ fontSize: 16, color: "#777", left: 15, fontFamily: 'Montserrat_700Bold', }}
            selectedTextStyle={styles.selectedTextStyle}
            containerStyle={{ bottom: 23, borderRadius: 20, }}
            itemTextStyle={{ fontSize: 16, color: "#333", left: 15, bottom: 15, fontWeight: "500", fontFamily: 'Montserrat_600SemiBold', letterSpacing: -0.2 }}
            inputSearchStyle={styles.inputSearchStyle}
            data={categories}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Search for services'}
            searchPlaceholder="Search..."
            value={valueCat}
            onChange={item => {
                setValueCat(item.value);
            }}
            renderLeftIcon={() => (
                <FontAwesome name="search" size={22} color="#777" />
            )}
        />
    );
};

const FreeSearch = ({ onChangeSearch, searchQuery }) => {
    return (
        <View style={[styles.dropdown, {flexDirection: "row", alignItems: "center",}]}>
            <FontAwesome name="search" size={22} color="#777" />
            <TextInput
                style={{ width: "100%", fontSize: 16, color: "#777", left: 15, fontFamily: 'Montserrat_700Bold', }}
                placeholder="Example: barber in Holon"
                placeholderTextColor="#777"
                value={searchQuery}
                onChangeText={onChangeSearch}
            />
        </View>
    );
};


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
    const [valueCat, setValueCat] = useState(null);
    const [valueCity, setValueCity] = useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    const categories = [
        { label: 'Barber', value: '1' },
        { label: 'Dentist', value: '2' },
        { label: 'Cosmetic', value: '3' },
        { label: 'Ministry', value: '4' },
    ];

    const onPressSearch = () => {
        props.navigation.navigate('AvailableAppointments');
    };

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <View style={{}}>
                <LinearGradient
                    colors={['#6CC3ED', '#4FA4E5',]}
                    style={[{ paddingBottom: 50, paddingTop: "20%", }]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }} >
                    <View style={{ flexDirection: "row" }}>
                        <Text style={[styles.heading,]}>Get your services</Text>
                        <TouchableOpacity style={{ marginLeft: 'auto', right: 10, }} onPress={() => { setIsFree(!isFree) }}>
                            <Ionicons name="search-circle-sharp" size={50} color="white" />
                            <Text style={styles.FreeSearch}>free</Text>
                            <Text style={styles.FreeSearch}>search</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.heading, { marginTop: -30 }]}>done without</Text>
                    <Text style={[styles.heading,]}>any hassie</Text>
                    {(!isFree) ?
                        <SearchList categories={categories} valueCat={valueCat} setValueCat={setValueCat}></SearchList> :
                        <FreeSearch onChangeSearch={onChangeSearch} searchQuery={searchQuery}></FreeSearch>
                    }
                </LinearGradient>
                <View style={[{ marginTop: -15, width: "100%", alignSelf: "center" }]}>
                    <FavoriteCategory navigation={props.navigation} />
                </View>
                <View style={styles.line}></View>
                <ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexDirection: 'row', paddingBottom: 40, }}>
                    <TouchableOpacity style={[styles.squre, { marginLeft: 20, }, isAll && { backgroundColor: '#4FA4E5' }]} onPress={() => { setIsAll(true); setIsRate(false); setIsCloser(false); }}>
                        <Text style={[styles.sortBy, isAll && { color: '#FFF' }]}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.squre, isRate && { backgroundColor: '#4FA4E5' }]} onPress={() => { setIsRate(true); setIsCloser(false); setIsAll(false); }}>
                        <Text style={[styles.sortBy, isRate && { color: '#FFF' }]}>Rating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.squre, isCloser && { backgroundColor: '#4FA4E5' }]} onPress={() => { setIsCloser(true); setIsRate(false); setIsAll(false); }}>
                        <Text style={[styles.sortBy, isCloser && { color: '#FFF' }]}>closer meeting</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.squre, isRate && { backgroundColor: '#4FA4E5' }]} onPress={() => { setIsRate(true); setIsCloser(false); setIsAll(false); }}>
                        <Text style={[styles.sortBy, isRate && { color: '#FFF' }]}>Rating</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.squre, { marginRight: 20, }, isCloser && { backgroundColor: '#4FA4E5' }]} onPress={() => { setIsCloser(true); setIsRate(false); setIsAll(false); }}>
                        <Text style={[styles.sortBy, isCloser && { color: '#FFF' }]}>closer meeting</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View>
                    <View style={{ flexDirection: "row", width: "92%" }}>
                        <Text style={styles.clientDetails}>Client Details</Text>
                        <Ionicons style={{ marginLeft: 'auto', }} name="information-circle-outline" size={25} color="#999" />
                    </View>
                    <View style={styles.clientDetailsView}>
                        <View style={styles.inputView}>
                            <Feather name="user" size={25} color="#19364D" />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Your Name"
                                placeholderTextColor="#444"
                            />
                        </View>
                        <View style={styles.inputView}>
                            <FontAwesome name="location-arrow" size={25} color="#19364D" />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="City"
                                placeholderTextColor="#444"
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.searchButton} onPress={onPressSearch}>
                    <Text style={{ color: "#FFF", fontWeight: '600', fontSize: 18 }}>Next</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SearchUserScreen;

const styles = StyleSheet.create({
    heading: {
        marginTop: 5,
        left: 40,
        fontSize: 30,
        color: 'white',
        fontFamily: 'Montserrat_700Bold_Italic',
    },
    FreeSearch: {
        fontSize: 11,
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
        textAlign: "center",
    },
    dropdown: {
        marginTop: 60,
        height: 60,
        width: "85%",
        borderRadius: 18,
        paddingHorizontal: 30,
        backgroundColor: '#FDFDFD',
        shadowColor: "#000",
        elevation: 20,
        alignSelf: "center",
    },
    search: {
        paddingTop: 20,
        marginLeft: "8%",
    },
    selectedTextStyle: {
        fontSize: 16,
        color: "#333",
        left: 15,
        fontFamily: 'Montserrat_700Bold_Italic',
    },
    inputSearchStyle: {
        fontSize: 16,
        color: "#333",
        borderColor: "#FFF",
        left: 5,
    },
    line: {
        backgroundColor: '#DDD',
        height: 2,
        width: "90%",
        alignSelf: "center",
        marginBottom: 25,
    },
    filter: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 0.2,
    },
    squre: {
        backgroundColor: '#fff',
        height: 55,
        borderRadius: 20,
        marginLeft: 7,
        marginRight: 7,
        paddingHorizontal: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e6e8ef",
        flex: 1,
        alignSelf: 'stretch',
    },
    sortBy: {
        color: '#35557f',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '700',
    },
    clientDetails: {
        marginLeft: 30,
        fontSize: 17,
        color: "#BBB",
        fontWeight: "500",
    },
    clientDetailsView: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        paddingHorizontal: 30,
        shadowColor: "#555",
        elevation: 20,
        width: "90%",
        alignSelf: "center",
        marginTop: 15,
        paddingBottom: 30,
    },
    inputView: {
        borderWidth: 2,
        borderRadius: 22,
        borderColor: "#EEE",
        paddingHorizontal: 20,
        paddingVertical: 12,
        marginTop: 30,
        width: "100%",
        alignSelf: "center",
        flexDirection: "row",
    },
    TextInput: {
        fontSize: 15,
        left: 20,
        fontWeight: "bold",
        width: "100%",
    },
    searchButton: {
        borderRadius: 18,
        width: "80%",
        marginBottom: 50,
        height: 55,
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#4FA4E5",
    },


});