import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Dropdown } from 'react-native-element-dropdown';


const MainPage = () => {
  const [loaded] = useFonts({
    'Montserrat-Bold': require('./../../assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Regular': require('./../../assets/fonts/Montserrat-Regular.ttf'),
  });



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

    if (!loaded) {
        return null;
      }

  return (
    <ScrollView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Favorite Categories</Text>
          <View style={styles.categoryContainer}>
            <View style={[styles.categoryItem, {backgroundColor: '#4FA4E5'}]}>
              <MaterialCommunityIcons name="hair-dryer" size={48} color="#fff" />
              <Text style={[styles.categoryText, {color: '#fff', fontFamily: 'Montserrat-Regular'}]}>Barber</Text>
            </View>
            <View style={[styles.categoryItem, {backgroundColor: '#6CC3ED'}]}>
              <MaterialCommunityIcons name="home-heart" size={48} color="#fff" />
              <Text style={[styles.categoryText, {color: '#fff', fontFamily: 'Montserrat-Regular'}]}>Ministry</Text>
            </View>
            <View style={[styles.categoryItem, {backgroundColor: '#2D87B8'}]}>
              <MaterialCommunityIcons name="bank" size={48} color="#fff" />
              <Text style={[styles.categoryText, {color: '#fff', fontFamily: 'Montserrat-Regular'}]}>Bank</Text>
            </View>
            <View style={[styles.categoryItem, {backgroundColor: '#0080C8'}]}>
              <MaterialCommunityIcons name="face-woman-shimmer-outline" size={48} color="#fff" />
              <Text style={[styles.categoryText, {color: '#fff', fontFamily: 'Montserrat-Regular'}]}>Cosmetic</Text>
            </View>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "109%",
    right: "4.5%", 
    marginTop: "2%",
    elevation: 12,
    shadowColor: '#000',

  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 25,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  categoryItem: {
    width: 140,
    height: 120,
    margin: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  more: {
    width: 350,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 40,
    marginTop: 25,
},
section: {
    marginTop: 15,
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
    fontSize: 14,
    borderRadius: 8,
    color: 'black',
    alignItems: 'center',
},
labelCity: {
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'gray',
    fontSize: 14,
    borderRadius: 8,
},
placeholderStyle: {
    fontSize: 16,
    color: '#001933',
},
});

export default MainPage;