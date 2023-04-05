import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppointmentList = ({ appointments, onDeleteAppointment }) => {
    return (
        <FlatList
            data={appointments}
            renderItem={({ item }) => (
                <View style={styles.appointmentContainer}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="calendar-clock" size={32} color="#2D87B8" />
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.customerNameText}>{item.customerName}</Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                    <TouchableOpacity onPress={() => onDeleteAppointment(item.id)}>
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

const ProviderPage = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        // Fetch appointments from API or local storage
        const appointmentsData = [
            {
                id: '1',
                customerName: 'John Doe',
                date: '2023-03-24T10:30:00Z',
            },
            {
                id: '2',
                customerName: 'Jane Smith',
                date: '2023-03-25T14:00:00Z',
            },
            // Add more appointments as needed
        ];
        setAppointments(appointmentsData);
    }, []);

    const handleDeleteAppointment = (id) => {
        setAppointments((prevAppointments) =>
            prevAppointments.filter((appointment) => appointment.id !== id)
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Upcoming Appointments</Text>
                <MaterialCommunityIcons name="calendar-plus" size={32} color="#ffffff" />
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
        paddingHorizontal: 16,
        paddingTop: 64,
        paddingBottom: 16,
        marginBottom: 32,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        shadowColor: "#000",
        elevation: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffff',
      },
    listContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
    appointmentContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        marginBottom: 16,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
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
});



export default ProviderPage;
