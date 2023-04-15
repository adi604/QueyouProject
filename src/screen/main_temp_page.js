import { ScrollView, TouchableOpacity, Image, FlatList, StyleSheet, Text, View, Linking } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ServicesList = props => {

  const [isFilter, setIsFilter] = useState(true);

  const onPressSchedule = () => {
    props.navigation.navigate('CalendarPickerScreen');
  };

  const onPressLocation = (address) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
    Linking.openURL(url);
  }

  const services = [
    { name: 'Service 1', time: '1 hour', price: '$50' },
    { name: 'Service 2', time: '2 hours', price: '$100' },
    { name: 'Service 3', time: '30 minutes', price: '$25' },
    { name: 'Service 4', time: '1 hour', price: '$50' },
    { name: 'Service 5', time: '2 hours', price: '$100' },
    { name: 'Service 6', time: '30 minutes', price: '$25' },
    { name: 'Service 7', time: '1 hour', price: '$50' },
    { name: 'Service 8', time: '2 hours', price: '$100' },
    { name: 'Service 9', time: '30 minutes', price: '$25' },
    // Add more services as needed
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={onPressSchedule}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemTime}>{item.time}</Text>
      </View>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={[{ backgroundColor: 'rgba(204, 217, 255, 0.255)', top: 25, height: "100%" }]}>
      <LinearGradient
        colors={['#4FA4E5', '#0069BA',]}
        style={{
          width: '100%', height: 100, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, padding: 20, bottom: 25,
          shadowColor: '#000',
          elevation: 30,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={styles.resultsFound}>89 results were found</Text>
        <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
          <Ionicons style={{ top: 15, }} name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      </LinearGradient>
      <FlatList
          data={services}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          contentContainerStyle={styles.listContainer}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
    </View>
  )
};


export default ServicesList


const styles = StyleSheet.create({
  resultsFound: {
    textAlign: 'center',
    color: 'white',
    fontSize: 19,
    top: 40,
    letterSpacing: 1,
    fontWeight: '500',
  },
  btnfilter: {
    fontSize: 40,
    backgroundColor: '#e9e9e9',
    width: '50%',
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    elevation: 10,
    shadowColor: "#000",
  },
  pressed: {
    backgroundColor: '#0069BA',
  },
  textfilter: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: "500",
  },
  pressedText: {
    color: '#fff',
    textShadowColor: 'rgba(255,255,255, 0.3)',
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 20,
  },
  list: {
    backgroundColor: "#FFF",
    paddingHorizontal: 30,
    paddingVertical: 30,
    width: "80%",
    alignSelf: "center",
    marginBottom: 120,
    borderRadius: 10,
  },
  service: {
    fontSize: 20,
    color: `#777`,
    fontWeight: "bold",
  },
  listContainer: {
    paddingBottom: 40,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 20,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  itemTime: {
    fontSize: 15,
    color: '#AAA',
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4FA4E5',
  },

});