import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { LinearGradient } from 'expo-linear-gradient';


const CalendarPickerScreen = props => {

    const [selectedDate, setSelectedDate] = useState("");

    const onDateChangeFunc = (date) => {
        setSelectedDate(date.toString());
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#64b5f6', '#9575cd']}
                style={{
                    width: 450, height: 380, right: 20, padding: 20, bottom: 18, elevation: 30,
                    shadowColor: '#52006A',
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <CalendarPicker
                onDateChange={onDateChangeFunc}
                disabledDates={['2023-03-20', '2023-03-22', '2023-03-25']}
                textStyle={{
                    color: '#FFFFFF',
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}
                />

            </LinearGradient>
            
            <View>
                <Text style={styles.dateStr}>SELECTED : { selectedDate }</Text>
                <TouchableOpacity style={styles.viButton}>
                    <ImageBackground source={require('../../assets/vi2.png')} style={styles.vi}>
                        <Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </View>
    );

}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#e6e6ff',
    marginTop: 50,
  },
  viButton: {
    top: 5,
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
    top: 50
},
dateStr: {
    left: 10,
    top: 30,
    fontSize: 17,
    fontWeight: "bold",
},
});

export default CalendarPickerScreen


