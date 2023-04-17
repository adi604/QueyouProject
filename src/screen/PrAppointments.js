import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { serverBaseUrl } from '../utils/strings';
import { sendRequest } from '../utils/utils'


const AppointmentList = ({ appointments, onDeleteAppointment }) => {
    return (
        <FlatList
            style={{backgroundColor: "#FFF", marginTop: "-22%", shadowColor: "#000", elevation: 40, width: "93%", alignSelf: "center",}}
            data={appointments}
            renderItem={({ item }) => (
                <View key={item.key} style={styles.appointmentContainer}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="calendar-clock" size={32} color="#2D87B8" />
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.customerNameText}>{item.customerName}</Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                        <Text style={styles.timeText}>{item.time}</Text>
                    </View>
                    <TouchableOpacity onPress={() => onDeleteAppointment(item.key)}>
                        <AntDesign name="delete" size={24} color="#ff0000" />
                    </TouchableOpacity>
                </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
        />
    );
};

const ProviderPage = props => {
    const [appointments, setAppointments] = useState([]);
    const [providerUserName, setProviderUserName] = useState(props.route.params.providerUserName)

    useEffect(() => {
        async function fetchMeetings() {
            // Fetch appointments from API or local storage
            const url = `${serverBaseUrl}/meetings/providerMeetings/${providerUserName}`;
            const response = await sendRequest(url, 'GET');
            if(!response.ok) {
                console.log("Fetch Meetings Faild !")
            } else {
                // Fetch succeeded
                const data = response.body
                const appointmentsData = []
                data.forEach((item) => {
                    appointmentsData.push({
                        key: item._id,
                        customerName: item.customerName,
                        date: item.date,
                        time: item.time,
                    })
                });
                setAppointments(appointmentsData);
            }
        }
        
        fetchMeetings()

    }, []);

    async function handleDeleteAppointment (key) {
        // Delete from the server
        const url = `${serverBaseUrl}/meetings/${key}`;
        const response = await sendRequest(url, 'DELETE');
        if(!response.ok) {
            console.log("Delete Meeting Faild !")
        } else {
            // Fetch succeeded
            console.log("Delete Meeting succeeded !")
            // Delete from the client
            setAppointments((prevAppointments) =>
                prevAppointments.filter((appointment) => appointment.key != key)
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', top: "18%", justifyContent: "center", }}>
                    <Text style={styles.heading}>Upcoming Appointments</Text>
                    <MaterialCommunityIcons style={{ padding: 7, }} name="calendar-plus" size={30} color="#ffffff" />
                </View>
            </View>
            <AppointmentList appointments={appointments} onDeleteAppointment={handleDeleteAppointment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#2D87B8',
        height: "40%",
        shadowColor: "#000",
        elevation: 50,
        width: "100%",
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
        alignSelf: "center",
    },
    listContainer: {
        top: 20,
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    appointmentContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        marginBottom: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        elevation: 15,
    },
    iconContainer: {
        marginRight: 16,
    },
    detailsContainer: {
        flex: 1,
    },
    customerNameText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333333',
    },
    dateText: {
        fontSize: 16,
        color: '#666666',
    },
    timeText: {
        fontSize: 16,
        color: '#666666',
    },
});



export default ProviderPage;
