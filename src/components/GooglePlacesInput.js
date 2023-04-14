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
                styles={styles}
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