// import React, { useState } from 'react';
// import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { useFonts } from 'expo-font';
// import { Dropdown } from 'react-native-element-dropdown';


// const MainPage = () => {
//   const [loaded] = useFonts({
//     'Montserrat-Bold': require('./../../assets/fonts/Montserrat-Bold.ttf'),
//     'Montserrat-Regular': require('./../../assets/fonts/Montserrat-Regular.ttf'),
//   });



//   const [barbershop, setBarbershop] = useState(false);
//     const [bank, setBank] = useState(false);
//     const [cosmetician, setCosmetician] = useState(false);
//     const [ministry, setMinistry] = useState(false);
//     const [valueCat, setValueCat] = useState(null);
//     const [valueCity, setValueCity] = useState(null);
//     const [isFocusCity, setIsFocusCity] = useState(false);
//     const [isFocusCat, setIsFocusCat] = useState(false);

//     const categories = [
//         { label: 'Barber', value: '1' },
//         { label: 'Dentist', value: '2' },
//         { label: 'Cosmetic', value: '3' },
//         { label: 'Ministry', value: '4' },
//     ];

//     const cities = [
//         { label: 'Tel Aviv', value: '1' },
//         { label: 'Ramat Gan', value: '2' },
//         { label: 'Petah Tikva', value: '3' },
//         { label: 'Modiin', value: '4' },
//         { label: 'Beer Sheva', value: '5' },
//         { label: 'Haifa', value: '6' },
//     ];

//     if (!loaded) {
//         return null;
//       }

//   return (
//     <ScrollView style={styles.container}>
//       <ImageBackground
//         source={require('./../../assets/logo7.png')}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//         blurRadius={5}
//       >
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>Favorite Categories</Text>
//           <View style={styles.categoryContainer}>
//             <View style={[styles.categoryItem, {backgroundColor: '#4FA4E5'}]}>
//               <MaterialCommunityIcons name="hair-dryer" size={48} color="#fff" />
//               <Text style={[styles.categoryText, {color: '#fff', fontFamily: 'Montserrat-Regular'}]}>Barber</Text>
//             </View>
//             <View style={[styles.categoryItem, {backgroundColor: '#6CC3ED'}]}>
//               <MaterialCommunityIcons name="home-heart" size={48} color="#fff" />
//               <Text style={[styles.categoryText, {color: '#fff', fontFamily: 'Montserrat-Regular'}]}>Ministry</Text>
//             </View>
//             <View style={[styles.categoryItem, {backgroundColor: '#2D87B8'}]}>
//               <MaterialCommunityIcons name="bank" size={48} color="#fff" />
//               <Text style={[styles.categoryText, {color: '#fff', fontFamily: 'Montserrat-Regular'}]}>Bank</Text>
//             </View>
//             <View style={[styles.categoryItem, {backgroundColor: '#0080C8'}]}>
//               <MaterialCommunityIcons name="face" size={48} color="#fff" />
//               <Text style={[styles.categoryText, {color: '#fff', fontFamily: 'Montserrat-Regular'}]}>Cosmetic</Text>
//             </View>
//           </View>
//           <View style={styles.more}>
//             <View style={[styles.section, {bottom: 20}]}>
//                 <Dropdown
//                     style={[styles.dropdown, isFocusCat && { borderColor: 'white' }]}
//                     placeholderStyle={styles.placeholderStyle}
//                     selectedTextStyle={styles.selectedTextStyle}
//                     inputSearchStyle={styles.inputSearchStyle}
//                     iconStyle={styles.iconStyle}
//                     data={categories}
//                     search
//                     maxHeight={300}
//                     labelField="label"
//                     valueField="value"
//                     placeholder={'More Categories'}
//                     searchPlaceholder="Search..."
//                     value={valueCat}
//                     onFocus={() => setIsFocusCat(true)}
//                     onBlur={() => setIsFocusCat(false)}
//                     onChange={item => {
//                         setValueCat(item.value);
//                         setIsFocusCat(false);
//                     }}
//                 />
//             </View>
//             <View style={styles.section}>
//                 <Dropdown
//                     style={[styles.dropdown, isFocusCity && { borderColor: 'white' }]}
//                     placeholderStyle={styles.placeholderStyle}
//                     selectedTextStyle={styles.selectedTextStyle}
//                     inputSearchStyle={styles.inputSearchStyle}
//                     iconStyle={styles.iconStyle}
//                     data={cities}
//                     search
//                     maxHeight={300}
//                     labelField="label"
//                     valueField="value"
//                     placeholder={'City'}
//                     placeholderTextColor="white"
//                     searchPlaceholder="Search..."
//                     value={valueCity}
//                     onFocus={() => setIsFocusCity(true)}
//                     onBlur={() => setIsFocusCity(false)}
//                     onChange={item => {
//                         setValueCity(item.value);
//                         setIsFocusCity(false);
//                     }}
//                 />
//             </View>
//         </View>
//         </View>
//       </ImageBackground>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 32,
//     paddingHorizontal: 16,
//     marginTop: 30,
//   },
//   title: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     color: '#fff',
//     fontFamily: 'Montserrat-Bold',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: {width: -1, height: 1},
//     textShadowRadius: 10,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   categoryItem: {
//     width: 130,
//     height: 135,
//     margin: 16,
//     borderRadius: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   categoryText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 16,
//     textAlign: 'center',
//     textShadowColor: 'rgba(0, 0, 0, 0.75)',
//     textShadowOffset: {width: -1, height: 1},
//     textShadowRadius: 10,
//   },
//   more: {
//     width: 350,
//     backgroundColor: '#f5fcff',
//     alignSelf: 'center',
//     borderRadius: 10,
//     padding: 40,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 10,
//       height: 10,
//     },
//     elevation: 10,
//     marginTop: 25,
// },
// section: {
//     marginTop: 20,
// },
// dropdown: {
//     height: 55,
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     color: 'white',
//     backgroundColor: 'white',
//     shadowColor: "#000",
//     shadowOffset: {
//         width: 0,
//         height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 20,
// },
// labelCat: {
//     fontWeight: 'bold',
//     backgroundColor: 'gray',
//     width: 130,
//     paddingHorizontal: 8,
//     fontSize: 14,
//     bottom: 65,
//     borderRadius: 8,
//     color: 'black',
//     alignItems: 'center',
// },
// labelCity: {
//     fontWeight: 'bold',
//     color: 'white',
//     backgroundColor: 'gray',
//     width: 42,
//     paddingHorizontal: 8,
//     fontSize: 14,
//     bottom: 65,
//     borderRadius: 8,
// },
// placeholderStyle: {
//     fontSize: 16,
//     color: '#001933',
// },
// });

// export default MainPage;



















import { ScrollView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
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
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.filter}>SORT BY</Text>
                        <Image style={{ height: 30, width: 25, top: 40, left: 10, }} source={require('./../../assets/sorting.png')}></Image>
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
        marginTop: 40,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        letterSpacing: 0.2,
    },
    squre: {
        backgroundColor: '#a1a1a1',
        height: 30,
        top: 20,
        marginRight: 25,
        borderRadius: 15,
        width: 100,
    },
    sortBy: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        top: 2,
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