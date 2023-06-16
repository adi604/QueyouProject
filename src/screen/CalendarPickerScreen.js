import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Platform, Button, ScrollView, Modal } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalSlide from '../components/ModalSlide';
import { serverBaseUrl } from '../utils/strings';
import { sendRequest, getCustomerDetails } from '../utils/utils'


const CalendarPickerScreen = props => {
    const [usernameProvider, setUsernameProvider] = useState(props.route.params.usernameProvider);
    const [nameProvider, setNameProvider] = useState(props.route.params.nameProvider);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    //####################################
    // Take from the server
    const [maxDate, setMaxDate] = useState(new Date('2024-05-07'));
    const [disabledDatesList, setDisabledDatesList] = useState(['2023-05-30']);
    const [disabledDays, setDisabledDays] = useState([5,6]);
    const [durationMeeting, setDurationMeeting] = useState(30);
    const [open, setOpen] = useState("08:00");
    const [close, setClose] = useState("19:00");
    const [allDisabledDays, setAllDisabledDays] = useState([]);
    //####################################
    const [timeOptions, setTimeOptions] = useState([]);
    const [filterTimes, setFilterTimes] = useState([]);


    useEffect(() => {
        async function fetchProviderDetails() {
            // Fetch details from API server
            const url = `${serverBaseUrl}/providers/username/${usernameProvider}`;
            const response = await sendRequest(url, 'GET');
            if(!response.ok) {
                console.log("Fetch provider details Faild !");
            } else {
                // Fetch succeeded
                const data = response.body;
                console.log('fetchProviderDetails(): ' + JSON.stringify(data));
                setMaxDate(data.maxDate);
                setDisabledDatesList(data.disabledDates);
                setDisabledDays(data.disabledDays);
                setDurationMeeting(data.durationMeeting);
                setOpen(data.openTime);
                setClose(data.closeTime);
                setAllDisabledDays(disabledDates(data.disabledDates, data.maxDate, data.disabledDays));
                setPossibleHours(data.durationMeeting, data.openTime, data.closeTime);
            }
        }
        fetchProviderDetails();
      }, []);


    // Check if date is disable
    const isDisabledDate = (date, disabledDays) => {
        return disabledDays.includes(date.getDay());
    };

    // return disable dates by disabledDatesList and disabledDays (until maxDate)
    const disabledDates = (disabledDatesList, maxDate, disabledDays) => {
        maxDate = new Date(maxDate);
        const dates = disabledDatesList;
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
        let i = 0;
        let currentDate = new Date(startDate.getTime());
        currentDate.setDate(currentDate.getDate() + i);
        while (currentDate <= maxDate) {
            currentDate = new Date(startDate.getTime());
            currentDate.setDate(currentDate.getDate() + i);
            if (isDisabledDate(currentDate, disabledDays)) {
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
    function setPossibleHours(duration, openTime, closeTime) {
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
        setFilterTimes(hours)
        setTimeOptions(hours)
    }


    async function bookMeeting () {
        if ((selectedDate != "") && (selectedTime != "")) {
            const customerDetails = await getCustomerDetails();
            const body = {
                date: selectedDate,
                time: selectedTime,
                providerUserName: usernameProvider,
                customerUserName: customerDetails.username,
                providerName: nameProvider,
                customerName: customerDetails.name,
              }
            const url = `${serverBaseUrl}/meetings`;
            console.log('bookMeeting(): ' + body);
            const response = await sendRequest(url, 'POST', body);
            if(!response.ok) {
                console.log("Create Meeting Failed !");
            } else {
                // Fetch succeeded
                console.log("Meeting Created !");
                setSelectedDate("");
                setSelectedTime("");
                //const meeting = response.body.meeting;
                setModalVisible(true);
            }
        }
    };


    async function showTimePicker () {
        setFilterTimes(timeOptions);
        if (selectedDate != "") {
            // get times of existing meetings for usernameProvider in this date.
            const url = `${serverBaseUrl}/meetings/providerTimesMeetings/${usernameProvider}/${selectedDate}`;
            const response = await sendRequest(url, 'GET');
            if(!response.ok) {
                console.log("Fetch Faild !");
            } else {
                // Fetch succeeded
                const times = response.body.times;
                // Remove hours of existing meetings
                setFilterTimes(timeOptions.filter(item => !times.includes(item)))
            }
        }
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

    const nextScreen = () => {
        console.log("nextScreen");
        props.navigation.navigate('My_Appointments', {});
    };
    return (
        <ScrollView>
            <View style={styles.container}>
            <ModalSlide
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                message="Meeting Created !"
                buttonText="OK"
                nextScreen={nextScreen}
            />
                <LinearGradient
                    colors={['#4FA4E5', '#64b5f6',]}
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
                            disabledDates={allDisabledDays}
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
                            colors={['#6CC3ED', '#ffffff',]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            style={styles.modalContainer}
                        >
                            <View style={styles.modalContent}>
                                <ScrollView contentContainerStyle={styles.timeOptions} showsVerticalScrollIndicator={false}>
                                    {filterTimes.map((time) => (
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
                        <Text style={{ height: 11, width: 11, backgroundColor: "#64b5f6", borderRadius: 50, alignSelf: "center", marginRight: 20, bottom: 10 }}></Text>
                        <View style={{}}>
                            <Text style={styles.timeStr}>Selected Meeting :</Text>
                            <Text style={styles.innerTime}>{selectedDate}{(selectedDate != "" && selectedTime != "") ? <Text>  |  </Text> : null}{selectedTime}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={async () => await bookMeeting()} style={styles.viButton}>
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
        backgroundColor: '#83C6F9',
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


