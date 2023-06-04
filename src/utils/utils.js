import * as strings from "../utils/strings";
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function sendRequest(url, method, body, isTokenRequired = true) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': isTokenRequired ? `${await AsyncStorage.getItem('token')}` : undefined
            },
            body: body !== undefined ? JSON.stringify(body) : undefined
        });
        const res = await response.json();
        return { body: res, ok: response.ok };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export function validatePassword(password) {
    if (password.length < 8) {
        return false;
    }
    // regex to check if the password contains at least one number
    const regex = /\d/;
    if (!regex.test(password)) {
        return false;
    }
    return true;
}

export function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export function validateSignUpDetails(SignUpDetails, onDetailsNotValid) {
    if (!validateEmail(SignUpDetails.email)) {
        onDetailsNotValid(strings.INVALID_EMAIL_MSG);
        return false;
    }
    if (!validatePassword(SignUpDetails.password)) {
        onDetailsNotValid(strings.INVALID_PASSWORD_MSG);
        return false;
    }
    if (SignUpDetails.password !== SignUpDetails.repeatPassword) {
        onDetailsNotValid(strings.REPEAT_PASSWORD_MSG);
        return false;
    }
    return true;
}

export async function getCurrentLocation() {
    try {
        console.log("Request For Permissions...")
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status);
        if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
        }
        console.log("Get Current Position...")
        // check this call.
        let { coords } = await Location.getCurrentPositionAsync();
        console.log("Got Current Position...")
        return coords;
    }
    catch (e) {
        console.log(e)
    }
}

export async function fetchCategories(setCategoriesList) {
    try {
        const categories = await sendRequest(`${strings.serverBaseUrl}/categories`, 'GET');
        const categoriesData = categories.body;
        const categoriesListTmp = categoriesData.map((category, index) => {
            return { label: category.categoryName, value: category.categoryName };
            });
        categoriesListTmp.unshift({ label: 'None', value: '' });
        setCategoriesList(categoriesListTmp);
    } catch (error) {
        console.log(error);
    }
};

export async function getProviderDetails() {
    const details = await AsyncStorage.getItem('providerDetails');
    console.log("getProviderDetails(): " + details)
    return JSON.parse(details);
}

export async function getCustomerDetails() {
    const details = await AsyncStorage.getItem('customerDetails');
    console.log("getCustomerDetails(): " + details)
    return JSON.parse(details);
}