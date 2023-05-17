import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const ProviderSchedule = () => {
  const [workingHours, setWorkingHours] = useState({
    monday: {
      startTime: '',
      endTime: '',
    },
    tuesday: {
      startTime: '',
      endTime: '',
    },
    wednesday: {
      startTime: '',
      endTime: '',
    },
    thursday: {
      startTime: '',
      endTime: '',
    },
    friday: {
      startTime: '',
      endTime: '',
    },
    saturday: {
      startTime: '',
      endTime: '',
    },
    sunday: {
      startTime: '',
      endTime: '',
    },
  });

  const handleStartTimeChange = (day, value) => {
    setWorkingHours({
      ...workingHours,
      [day]: {
        ...workingHours[day],
        startTime: value,
      },
    });
  };

  const handleEndTimeChange = (day, value) => {
    setWorkingHours({
      ...workingHours,
      [day]: {
        ...workingHours[day],
        endTime: value,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Provider Schedule</Text>
      </View>
      <View style={styles.day}>
        <Text style={styles.dayText}>Monday:</Text>
        <View style={styles.timeInputs}>
          <TextInput
            placeholder="Start time"
            style={styles.timeInput}
            value={workingHours.monday.startTime}
            onChangeText={(value) => handleStartTimeChange('monday', value)}
          />
          <Text style={styles.separator}>-</Text>
          <TextInput
            placeholder="End time"
            style={styles.timeInput}
            value={workingHours.monday.endTime}
            onChangeText={(value) => handleEndTimeChange('monday', value)}
          />
        </View>
      </View>

      {/* Repeat for all days of the week */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  subContainer: {
    backgroundColor: "#6CC3ED", 
    width: "100%", 
    height: 130, 
    justifyContent: "center", 
    borderRadius: 20, 
    bottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "#FFF",
    textAlign: "center",
    top: 30,
  },
  day: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "80%",
    alignSelf: "center",
    
  },
  dayText: {
    flex: 1,
    fontSize: 50,
    
  },
  timeInputs: {
    flexDirection: 'row',
  },
  timeInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  separator: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProviderSchedule;
