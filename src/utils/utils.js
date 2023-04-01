import * as strings from "../utils/strings";

export async function sendRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
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