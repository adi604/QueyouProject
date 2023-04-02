import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Platform, Button, ScrollView , Modal} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const CalendarPickerScreen = props => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [timeOptions] = useState([
        '12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM',
    ]);


    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
    
      const handleTimeSelect = (time) => {
        setSelectedTime(time);
        hideTimePicker();
      };

    const formatDate = (date) => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear().toString();
        return `${day}-${month}-${year}`;
      }

    const onDateChangeFunc = (date) => {
        setSelectedDate(formatDate(date.toString()));
    };

    const onChangeTime = (time) => {
        
    }


    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#1a75ff','#b3c6ff']}
                style={{
                    flex:1,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <View style={styles.calendarView}>
                    <CalendarPicker
                    onDateChange={onDateChangeFunc}
                    minDate = {new Date()}
                    monthTitleStyle = {{color:"#ffc266", fontWeight: 'bold', fontSize: 25,}}
                    yearTitleStyle = {{color:"#ffc266", fontWeight: 'bold', fontSize: 25,}}
                    previousTitleStyle = {{color:'#e6ffe6', fontWeight: 'bold',}}
                    nextTitleStyle = {{color:'#e6ffe6', fontWeight: 'bold',}}
                    todayBackgroundColor="#e6ffe6"
                    selectedDayStyle={{backgroundColor:"#ffc266"}}
                    disabledDatesTextStyle ={{color:'#666666', fontSize: 18,}}
                    disabledDates={['2023-04-20', '2023-04-22', '2023-04-25']}
                    textStyle={{
                        color: '#FFFFFF',
                        fontSize: 20,
                        fontWeight: 'normal',
                    }}
                    />
                </View>
            
                <View>
                    <Text style={styles.dateStr}>Selected Date : { selectedDate }</Text>


                    <TouchableOpacity onPress={showTimePicker} style={styles.clock}>
                        <MaterialCommunityIcons name="clock-edit-outline" size={70} color="#002080" style={styles.vi}/>
                    </TouchableOpacity>
                    <Modal visible={isTimePickerVisible} animationType="slide">
                        <LinearGradient
                            colors={['#1a75ff','#b3c6ff']}
                            style={styles.modalContainer}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                        >
                            <View style={styles.modalContent}>
                            <ScrollView contentContainerStyle={styles.timeOptions}>
                                {timeOptions.map((time) => (
                                <TouchableOpacity key={time} onPress={() => handleTimeSelect(time)} style={styles.timeOptionButton}>
                                    <Text style={styles.timeOptionText}>{time}</Text>
                                </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <TouchableOpacity onPress={hideTimePicker} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </Modal>


                    <Text style={styles.timeStr}>Selected Time : {selectedTime}</Text>

                    <TouchableOpacity style={styles.viButton}>
                        <MaterialCommunityIcons name="check" size={100} color="#39e600" style={styles.vi}/>
                    </TouchableOpacity>
                </View>
        </LinearGradient>

        </View>
    )

}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 25,
  },
  calendarView: {
    marginTop: 25,
    marginBottom: 10,
  },
  clock: {
    top: 25,
    left:170,
},
  viButton: {
    top: 0,
    left: 160,
    height: 100,
    borderRadius: 50,
    width: 105,
    marginBottom: 40,
    shadowColor: "#FFF",
    elevation: 20,
    justifyContent: "center",
},
vi: {
    height: 120,
},
dateStr: {
    left: 10,
    top: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
},
timeStr: {
    left: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
},
modalContainer: {
flex: 1,
},
timeOptions: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
},
timeOptionButton: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
},
timeOptionText: {
    fontSize: 18,
    fontWeight: "bold",
},
closeButtonText: {
    fontSize: 15,
    fontWeight: "bold",
},
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3c6ff',
},
modalContent: {
    backgroundColor: 'rgba(204, 217, 255, 0.2)',
    padding: 20,
    borderRadius: 5,
    width: '70%',
    maxHeight: '80%',
    maxWidth: '80%',
    borderWidth: 2,
    borderColor: '#FFA500',
},

});

export default CalendarPickerScreen


