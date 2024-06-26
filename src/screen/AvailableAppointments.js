import { ScrollView, TouchableOpacity, Image, FlatList, StyleSheet, Text, View, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getCustomerDetails, sendRequest } from '../utils/utils';
import { Avatar } from 'react-native-paper';


const AvailableAppointments = props => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const getProviders = async () => {
            const url = props.route.params.url;
            console.log(url);
            const response = await sendRequest(url, 'GET');
            setProviders(response.body);
        }
        getProviders(); 
    }, []);
    

    const onPressServices = async (username, name) => {
        const customerDetails = await getCustomerDetails();
        console.log("onPressServices(): provider username - ", username);
        props.navigation.navigate('CalendarPickerScreen', {
            usernameProvider: username,
            nameProvider: name,
            usernameCustomer: customerDetails.username,
            nameCustomer: customerDetails.name,
          });
    };

    const onPressLocation = (address) => {
        const url = `https://www.google.com/maps/search/?api=1&query=${address}`;
        Linking.openURL(url);
    }

    const onPressReview = (username, name) => {
        console.log(`onPressReview(): username - ${username}, name - ${name}`);
        props.navigation.navigate('Reviews', {
            usernameProvider: username,
            nameProvider: name,
          });
    };


    return (
        <View style={[{ backgroundColor: "white", top: 25, height: "95%" }]}>
            <LinearGradient
                colors={['#4FA4E5', '#64b5f6',]}
                style={{
                    width: '100%', height: 100, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, padding: 20, bottom: 25,
                    shadowColor: '#000',
                    elevation: 30,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <Text style={styles.resultsFound}>{providers.length} results were found</Text>
                <TouchableOpacity onPress={() => props.navigation.goBack(null)}>
                    <Ionicons style={{ top: 15, }} name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            </LinearGradient>

            {providers.length > 0 && <FlatList style={[{ top: 20 }]}
                data={providers}
                renderItem={({item}) =>
                    <View style={styles.box}>
                        {item.image ? <Avatar.Image size={80} source={{uri: item.image}} style={{ alignSelf: "center", marginLeft: 10 }}/>
                        : <MaterialIcons style={{ alignSelf: "center", marginLeft: 10 }} name="person-pin" size={80} color="#64b5f6" />}
                        <View style={[{ left: 30, paddingVertical: 1, width: "68%"}]}>
                            <View style={[{ flexDirection: 'row',}]}>
                                <Text style={styles.provider}>{item.name}</Text>
                                <TouchableOpacity onPress={()=>{onPressReview(item.username, item.name)}}>
                                    <Fontisto style={{ marginLeft: 30, top: 10 }} name="preview" size={26} color="#64b5f6" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.category}>{item.category}</Text>
                            <TouchableOpacity onPress={() => {onPressLocation(item.address)}}>
                                <View style={[{ flexDirection: 'row', bottom: 5, alignItems: "center" }]}>
                                    <Entypo name="location" size={15} color="#999" />
                                    <Text style={styles.address}>{item.address}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.continuebtn} onPress={()=>{onPressServices(item.username, item.name)}}>
                            <MaterialIcons name="navigate-next" size={40} color="#AAA" />
                        </TouchableOpacity>
                    </View>}
            />}
        </View>
    )
};


export default AvailableAppointments


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
    box: {
        flexDirection: "row",
        backgroundColor: '#FFF',
        shadowColor: "#000",
        elevation: 15,
        height: 90,
        width: "95%",
        alignSelf: "center",
        borderRadius: 50,
        marginBottom: 25,
        marginTop: 10,
    },
    provider: {
        fontSize: 19,
        color: `#777`,
        fontWeight: "bold",
        width: "60%",
    },
    category: {
        fontSize: 15,
        height: 30,
        color: `#999`,
    },
    address: {
        fontSize: 14,
        color: `#999`,
        left: 3,
        maxWidth: "90%",
        fontWeight: "500",
    },
    locationbtn: {
        height: 28,
        width: 28,
        left: 3,
        bottom: 18,
    },
    continuebtn: {
        alignSelf: "center",
    },
});