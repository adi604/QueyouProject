import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { sendRequest, getCurrentLocation } from '../utils/utils';
import * as strings from '../utils/strings';
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
import { useRef } from 'react';



const SearchList = ({ categories, valueCat, setValueCat }) => {

    const handleValueChange = (itemValue) => {
        if (itemValue === valueCat) {
            setValueCat(''); // Deselect the current selection
        } else {
            setValueCat(itemValue);
        }
    };
    

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
                handleValueChange(item.value);
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
    const [categoriesList, setCategoriesList] = useState([]);
    const [isRate, setIsRate] = useState(false);
    const [isCloser, setIsCloser] = useState(false);
    const [valueCat, setValueCat] = useState(undefined);
    const [valueCity, setValueCity] = useState(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isSelected, setSelection] = useState(false);
    const [name, setName] = useState(undefined);

    const onChangeSearch = query => setSearchQuery(query);
    
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await sendRequest(`${strings.serverBaseUrl}/categories`, 'GET');
                const categoriesData = categories.body;
                const categoriesListTmp = categoriesData.map((category, index) => {
                    return { label: category.categoryName, value: category.categoryName };
                    });
                categoriesListTmp.unshift({ label: 'None', value: '' });
                setCategoriesList(categoriesListTmp);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
    }, []);

    const onPressSearch = async () => {
        let url = `${strings.serverBaseUrl}/providers/filter?`;
        const params = [];
        if(isSelected) {
            const coordinates = await getCurrentLocation();
            params.push(`lat=${coordinates.latitude}&lng=${coordinates.longitude}`);
        }
        if(valueCat) {
            params.push(`category=${valueCat}`);
        }
        if(name) {
            params.push(`name=${name}`);
        }
        if(params.length > 0) {
            url += params.join('&');
        }
        props.navigation.navigate('AvailableAppointments', { 
            url: url,
            usernameCustomer: props.route.params.customerUserName,
            nameCustomer: props.route.params.customerName });
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
                    </View>
                    <Text style={[styles.heading,]}>without any hassle</Text>
                    
                    <SearchList categories={categoriesList} valueCat={valueCat} setValueCat={setValueCat}></SearchList>
                    
                </LinearGradient>
                
                <View style={styles.line}></View>


                <View>
                    <View style={styles.clientDetailsView}>
                        <View style={styles.inputView}>
                            <Feather name="user" size={25} color="#19364D" />
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Provider Name"
                                placeholderTextColor="#444"
                                onChangeText={(name) => setName(name)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            {/*<FontAwesome name="location-arrow" size={25} color="#19364D" />*/}
                            <View style={styles.Checkbox}>
                                <Checkbox  
                                    title="closer"  
                                    value={isSelected}
                                    onValueChange={setSelection}
                                    isChecked={isSelected} 
                                />
                            </View>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Closer To Me"
                                placeholderTextColor="#444"
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.searchButton} onPress={async () => {await onPressSearch()}}>
                    <Text style={{ color: "#FFF", fontWeight: '600', fontSize: 18 }}>Search</Text>
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
    Checkbox: {
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: '1%',
        marginLeft: '1%',
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
        marginBottom: 100,
        height: 55,
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#4FA4E5",
    },


});