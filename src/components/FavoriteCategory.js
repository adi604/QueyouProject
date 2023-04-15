import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { Feather } from '@expo/vector-icons';
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

const MainPage = () => {
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


  const [valueCity, setValueCity] = useState(null);
  const [isFocusCity, setIsFocusCity] = useState(false);

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

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.popular}>Most Popular Services</Text>
        <View style={{ flexDirection: "row", width: "85%", alignSelf: "center" }}>
          <View style={{}}>
            <View style={[styles.categoryItem, { backgroundColor: '#4FA4E5', shadowColor: "#4FA4E5" }]}>
              <MaterialCommunityIcons name="hair-dryer" size={30} color="#fff" />
            </View>
            <Text style={[styles.categoryText,]}>Barber</Text>
          </View>
          <View style={{ marginLeft: "12%", }}>
            <View style={[styles.categoryItem, { backgroundColor: '#6CC3ED', shadowColor: "#6CC3ED" }]}>
              <MaterialCommunityIcons name="home-heart" size={35} color="#fff" />
            </View>
            <Text style={[styles.categoryText,]}>Ministry</Text>
          </View>
          <View style={{ marginLeft: "12%", }}>
            <View style={[styles.categoryItem, { backgroundColor: '#2D87B8', shadowColor: "#2D87B8" }]}>
              <MaterialCommunityIcons name="bank" size={30} color="#fff" />
            </View>
            <Text style={[styles.categoryText,]}>Bank</Text>
          </View>
          <View style={{ marginLeft: "12%", }}>
            <View style={[styles.categoryItem, { backgroundColor: '#0080C8', shadowColor: "#0080C8" }]}>
              <Feather name="more-horizontal" size={30} color="#fff" />
            </View>
            <Text style={[styles.categoryText,]}>more</Text>
          </View>
        </View>
        <Text style={[styles.popular, { marginTop: 20 }]}>Close To me</Text>
        <View style={{ flexDirection: "row", width: "90%", alignSelf: "center" }}>
          <View style={[styles.closetItem,]}>
            <View style={styles.iconCloser}>
              <MaterialCommunityIcons name="hair-dryer" size={26} color="#35557f" />
            </View>
            <Text style={styles.closerProvider}>Adi Aviv</Text>
            <Text style={styles.closerDetails}>open now | 1.7 km</Text>
          </View>
          <View style={[styles.closetItem, { left: 12 }]}>
            <View style={styles.iconCloser}>
              <MaterialCommunityIcons name="home-heart" size={26} color="#35557f" />
            </View>
            <Text style={styles.closerProvider}>Adi Aviv</Text>
            <Text style={styles.closerDetails}>open now | 1.7 km</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "90%", alignSelf: "center", marginTop: 10 }}>
          <View style={[styles.closetItem,]}>
            <View style={styles.iconCloser}>
              <MaterialCommunityIcons name="bank" size={26} color="#35557f" />
            </View>
            <Text style={styles.closerProvider}>Adi Aviv</Text>
            <Text style={styles.closerDetails}>open now | 1.7 km</Text>
          </View>
          <View style={[styles.closetItem, { left: 12 }]}>
            <View style={styles.iconCloser}>
              <Feather name="more-horizontal" size={26} color="#35557f" />
            </View>
            <Text style={styles.closerProvider}>Adi Aviv</Text>
            <Text style={styles.closerDetails}>open now | 1.7 km</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "90%", alignSelf: "center", marginTop: 10 }}>
          <View style={[styles.closetItem,]}>
            <View style={styles.iconCloser}>
              <MaterialCommunityIcons name="bank" size={26} color="#35557f" />
            </View>
            <Text style={styles.closerProvider}>Adi Aviv</Text>
            <Text style={styles.closerDetails}>open now | 1.7 km</Text>
          </View>
          <View style={[styles.closetItem, { left: 12 }]}>
            <View style={styles.iconCloser}>
              <Feather name="more-horizontal" size={26} color="#35557f" />
            </View>
            <Text style={styles.closerProvider}>Adi Aviv</Text>
            <Text style={styles.closerDetails}>open now | 1.7 km</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 25,
  },
  popular: {
    fontSize: 19,
    paddingBottom: 30,
    paddingLeft: 30,
    color: "#000",
    fontFamily: "Montserrat_700Bold",
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  categoryItem: {
    width: 55,
    height: 55,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 30,
  },
  categoryText: {
    fontSize: 15,
    bottom: 10,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
    color: "#999",
  },
  closetItem: {
    marginTop: 5,
    width: "49%",
    paddingTop: 10,
    paddingLeft: 15,
    height: 120,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
  },
  iconCloser: {
    marginTop: 5,
    backgroundColor: "#FFF",
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  closerProvider: {
    marginTop: 5,
    fontSize: 17,
    color: "#454545",
    fontFamily: "Montserrat_600SemiBold",
  },
  closerDetails: {
    fontSize: 16,
    color: "#bdc3cb",
    shadowColor: "#21476c",
    fontWeight: "700",
  },
});

export default MainPage;