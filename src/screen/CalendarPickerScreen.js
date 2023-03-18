import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Platform, Button} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';



const CalendarPickerScreen = props => {
    const [selectedDate, setSelectedDate] = useState("");

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('time');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');

    const onDateChangeFunc = (date) => {
        setSelectedDate(date.toString());
    };

    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        let tempDate = new Date(currentDate)
        let c1 = '';
        if (tempDate.getHours() < 10) {
            c1 = '0';
        }
        let c2 = '';
        if (tempDate.getMinutes() < 10) {
            c2 = '0';
        }
        let fTime = c1 + tempDate.getHours() + ':' + c2 + tempDate.getMinutes();
        setText(fTime)
    }
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }


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
                <Text style={styles.dateStr}>Date : { selectedDate }</Text>

                    <View style={{margin:30, width:150, left:100, top:8}}>
                        <Button title='Time' onPress={()=>{showMode('time')}}/>
                    </View>
                    {show && (
                        <DateTimePicker
                        testID='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChangeTime}
                        />
                    )}
                    <Text style={styles.timeStr}>Time : {text}</Text>
                
                <TouchableOpacity style={styles.viButton}>
                    <ImageBackground source={require('../../assets/vi2.png')} style={styles.vi}>
                        <Text></Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>

        </View>
    )

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
},
dateStr: {
    left: 10,
    top: 5,
    fontSize: 17,
    fontWeight: "bold",
},
timeStr: {
    left: 10,
    fontSize: 17,
    fontWeight: "bold",
},

});

export default CalendarPickerScreen


