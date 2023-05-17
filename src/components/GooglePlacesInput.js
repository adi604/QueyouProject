import React, { useEffect, useRef, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_API_KEY, GOOGLE_PLACES_DETAILS_URL } from '../utils/strings';
import { sendRequest } from "../utils/utils"


const GooglePlacesInput = ( { setAddress }) => {
    const [listViewDisplayed, setListViewDisplayed] = useState(false);
    const ref = useRef();

    return (
        <ScrollView
            horizontal
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{ flexGrow: 1 }}>
            <GooglePlacesAutocomplete
                listViewDisplayed={listViewDisplayed}
                keepResultsAfterBlur={true}
                ref={ref}
                placeholder='Search'
                onPress={async (data) => {
                    const googlePlacesDetailsUrl = `${GOOGLE_PLACES_DETAILS_URL}${data.place_id}&key=${GOOGLE_PLACES_API_KEY}`;
                    const response = await sendRequest(googlePlacesDetailsUrl, 'GET');
                    const location = response.body.result.geometry.location;
                    const address = {
                        lat: location.lat.toString(),
                        lng: location.lng.toString(),
                        description: data.description
                    }
                    console.log(address);
                    setAddress(data);
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