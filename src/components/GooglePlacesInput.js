import React, { useEffect, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = (styles) => {
    const ref = useRef();

    return (
        <ScrollView
            horizontal
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}>
            <GooglePlacesAutocomplete
                styles={{
                    row: {
                        backgroundColor: "#FFF",
                        //borderRadius: 10,
                        //height: 45,
                        //shadowColor: "#000",
                        //elevation: 10,
                    },
                    textInputContainer: {
                        backgroundColor: "#FFF",
                        width: "80%",
                        alignSelf: "center",
                        borderRadius: 10,
                        height: 45,
                        shadowColor: "#000",
                        elevation: 10,
                    },
                    textInput: {
                        backgroundColor: "#FFF",
                        alignSelf: "center",
                        borderRadius: 10,
                        height: 45,
                        shadowColor: "#000",
                        elevation: 10,
                    },
                    predefinedPlacesDescription: {
                        backgroundColor: "#FFF",
                        width: "80%",
                        alignSelf: "center",
                        borderRadius: 10,
                        height: 45,
                        shadowColor: "#000",
                        elevation: 10,
                    },
                }}
                ref={ref}
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyDLU7ME7Ck5nykTBrfNidv-w1-Uua-0dUM',
                    language: 'en',
                }}
            />
        </ScrollView>
    );
};

export default GooglePlacesInput;