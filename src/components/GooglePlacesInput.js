import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_DETAILS_URL } from '../utils/strings';
import { sendRequest } from "../utils/utils"
import { View, StyleSheet } from 'react-native';


const GooglePlacesInput = ( { setAddress }) => {
    const [listViewDisplayed, setListViewDisplayed] = useState(false);
    const ref = useRef();

    return (
        <ScrollView
            horizontal
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ width: "100%" }}>
            <GooglePlacesAutocomplete
                fetchDetails={true}
                keepResultsAfterBlur={true}
                ref={ref}
                placeholder='Search'
                styles={{
                    container: styles.autocompleteContainer,
                    textInputContainer: styles.textInputContainer,
                    textInput: styles.textInput,
                    listView: styles.listView,
                  }}
                onPress={async (data) => {
                    const googlePlacesDetailsUrl = `${GOOGLE_PLACES_DETAILS_URL}${data.place_id}&key=${GOOGLE_PLACES_API_KEY}`;
                    const response = await sendRequest(googlePlacesDetailsUrl, 'GET', undefined, false);
                    const location = response.body.result.geometry.location;
                    const address = {
                        lat: Number(location.lat.toString()),
                        lng: Number(location.lng.toString()),
                        description: data.description
                    }
                    console.log(address);
                    setAddress(address);
                    setListViewDisplayed(false);
                }}
                query={{
                    key: GOOGLE_PLACES_API_KEY,
                    language: 'en',
                }}
            />
        </ScrollView>
    );
};

export default GooglePlacesInput;


const styles = StyleSheet.create({
    autocompleteContainer: {
      width: '100%',
      marginTop: 30,
    },
    textInputContainer: {
        backgroundColor: "#FFF",
        maxWidth: "100%",
        alignSelf: "center",
        borderRadius: 10,
        height: 50,
        shadowColor: "#000",
        elevation: 10,
        borderWidth: 0.8,
        borderColor: "#EEE",
        bottom: 30,
    },
    textInput: {
      alignContent: "center",
      fontSize: 16,
      color: "#333",
      maxWidth: "80%",
    },
    listView: {
      width: "80%",
      alignSelf: "center",
    },
});