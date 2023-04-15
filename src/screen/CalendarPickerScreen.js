import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Platform, Button, ScrollView, Modal } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
        <ScrollView>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#2D87B8', '#6CC3ED', '#6CC3ED', '#2D87B8',]}
                    style={{ height: 470, paddingTop: 20, }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                >
                    <View style={styles.calendarView}>
                        <CalendarPicker
                            onDateChange={onDateChangeFunc}
                            minDate={new Date()}
                            maxDate={maxDate}
                            monthTitleStyle={{ color: "#FFF", fontWeight: 'bold', fontSize: 30, }}
                            yearTitleStyle={{ color: "#FFF", fontWeight: 'bold', fontSize: 30, left: 7 }}
                            previousTitle={<Ionicons name="chevron-back-outline" size={25} color="#DDD" />}
                            nextTitle={<Ionicons name="chevron-forward-outline" size={25} color="#DDD" />}
                            todayBackgroundColor="#e6ffe6"
                            selectedDayStyle={{ backgroundColor: "#ffc266" }}
                            disabledDatesTextStyle={{ color: '#555', fontSize: 16, fontWeight: "400", }}
                            disabledDates={disabledDates()}
                            textStyle={{
                                color: '#FFF',
                                fontSize: 17,
                                fontWeight: "bold",
                            }}
                        />
                    </View>
                    <TouchableOpacity onPress={showTimePicker} style={styles.clock}>
                        <MaterialCommunityIcons name="clock-edit-outline" size={50} color="#ffc266" />
                    </TouchableOpacity>
                </LinearGradient>
                <View>
                    <Modal visible={isTimePickerVisible} animationType="slide">
                        <LinearGradient
                            colors={['#2D87B8', '#6CC3ED', '#6CC3ED', '#2D87B8',]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.modalContainer}
                        >
                            <View style={styles.modalContent}>
                                <ScrollView contentContainerStyle={styles.timeOptions} showsVerticalScrollIndicator={false}>
                                    {timeOptions.map((time) => (
                                        <TouchableOpacity key={time} onPress={() => handleTimeSelect(time)} style={styles.timeOptionButton}>
                                            <Text style={styles.timeOptionText}>{time}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                                <TouchableOpacity onPress={hideTimePicker} style={styles.closeButton}>
                                    <Text style={styles.closeButtonText}>close</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </Modal>
                    <View style={{ flexDirection: "row", width: "80%", alignContent: "center", padding: 20 }}>
                        <Text style={{ height: 11, width: 11, backgroundColor: "#2D87B8", borderRadius: 50, alignSelf: "center", marginRight: 20, bottom: 10 }}></Text>
                        <View style={{}}>
                            <Text style={styles.timeStr}>Selected Meeting :</Text>
                            <Text style={styles.innerTime}>{selectedDate}  |  {selectedTime}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.viButton}>
                        <MaterialCommunityIcons name="check" size={70} color="#555" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    container: {

    },
    calendarView: {
        marginTop: 25,
        height: "80%",
    },
    clock: {
        alignSelf: "center",
        top: 6,
    },
    viButton: {
        justifyContent: "center",
        alignSelf: "center",
        top: 15,
    },
    timeStr: {
        fontSize: 18,
        fontWeight: "700",
        color: "#555",
    },
    innerTime: {
        top: 3,
        color: "#AAA",
        fontWeight: "700",
        fontSize: 18,
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
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
        letterSpacing: 2,
    },
    closeButtonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#DDD",
        alignSelf: "center",
        top: 15,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b3c6ff',
    },
    modalContent: {
        backgroundColor: 'rgba(204, 217, 255, 0.255)',
        paddingBottom: 20,
        borderRadius: 50,
        width: '70%',
        maxHeight: '80%',
        maxWidth: '80%',
        borderWidth: 2,
        borderColor: '#FFF',
    },

});

export default CalendarPickerScreen


