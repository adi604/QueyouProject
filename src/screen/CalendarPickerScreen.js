import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Platform, Button, ScrollView , Modal} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const CalendarPickerScreen = props => {
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    //////////////////////////////////////
    // Take from the server
    const maxDate = new Date('2024-05-07')
    const disabledDatesList = ['2023-04-20', '2023-04-22', '2023-04-24', '2023-04-25']
    const disabledDays = [1, 3];
    const durationMeeting = 25;
    const open = "08:25";
    const close = "20:00";
    //////////////////////////////////////
    // Remove hours of existing meetings
    const [timeOptions] = useState(getPossibleHours(durationMeeting, open, close));


    // Check if date is disable
    const isDisabledDate = (date) => {
        return disabledDays.includes(date.getDay());
      };
    
    // return disable dates by disabledDatesList and disabledDays (until maxDate)
    const disabledDates = () => {
    const dates = disabledDatesList;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 1);
    let i = 0;
    let currentDate = new Date(startDate.getTime());
    currentDate.setDate(currentDate.getDate() + i);
    while (currentDate <= maxDate) {
        currentDate = new Date(startDate.getTime());
        currentDate.setDate(currentDate.getDate() + i);
        if (isDisabledDate(currentDate)) {
        dates.push(currentDate);
        }
        i++;
    }
    return dates;
    };

    function finishTime(duration, hour, minute) {
        minute += duration;
        while (minute >= 60) {
            hour++;
            minute -= 60;
          }
        return [hour, minute]
      }
      
      // return Possible Hours by openTime, closeTime and duration of meeting.
      function getPossibleHours(duration, openTime, closeTime) {
        const hours = [];
        let hour = parseInt(openTime.split(':')[0]);
        let minute = parseInt(openTime.split(':')[1]);
        const maxHour = parseInt(closeTime.split(':')[0]);
        const maxMinute = parseInt(closeTime.split(':')[1]);
        let finish = finishTime(duration, hour, minute)
        let finishH = finish[0]
        let finishM = finish[1]
        let next = []
        let hourStr = ""
        let minuteStr = ""
        let current = ""
        while (finishH < maxHour || (finishH === maxHour && finishM <= maxMinute)) {
          hourStr = hour.toString().padStart(2, '0');
          minuteStr = minute.toString().padStart(2, '0');
          current = `${hourStr}:${minuteStr}`;
          hours.push(current);
          next = finishTime(duration, hour, minute)
          hour = next[0]
          minute = next[1]
          finish = finishTime(duration, hour, minute)
          finishH = finish[0]
          finishM = finish[1]
        }
        return hours;
      }
      

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
                    maxDate={maxDate}
                    monthTitleStyle = {{color:"#ffc266", fontWeight: 'bold', fontSize: 25,}}
                    yearTitleStyle = {{color:"#ffc266", fontWeight: 'bold', fontSize: 25,}}
                    previousTitleStyle = {{color:'#e6ffe6', fontWeight: 'bold',}}
                    nextTitleStyle = {{color:'#e6ffe6', fontWeight: 'bold',}}
                    todayBackgroundColor="#e6ffe6"
                    selectedDayStyle={{backgroundColor:"#ffc266"}}
                    disabledDatesTextStyle ={{color:'#666666', fontSize: 18,}}
                    disabledDates={disabledDates()}
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


