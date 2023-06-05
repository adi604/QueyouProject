import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { serverBaseUrl } from '../utils/strings';
import { sendRequest } from '../utils/utils';
import {
    useFonts,
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

const AddReview = props => {

    let [fontsLoaded] = useFonts({
        Montserrat_100Thin,
        Montserrat_200ExtraLight,
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light_Italic,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black_Italic,
    });

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');
  const [name, setName] = useState('');
  const [usernameProvider, setUsernameProvider] = useState(props.route.params.usernameProvider);
  const [nameProvider, setNameProvider] = useState(props.route.params.nameProvider);

  const handleReviewTextChange = (text) => {
    setReviewText(text);
  };
  const handleRatingChange = (text) => {
    setRating(text);
  };
  const handleNameChange = (text) => {
    setName(text);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleSubmitReview = async () => {
    // Perform necessary actions with the review data, such as sending it to a server or storing it locally
    console.log('Review :', reviewText, rating);
    const score = Number(rating);
    if ((reviewText != "") && (rating != "") && (!isNaN(score)) && (Number.isInteger(score)) && (score >= 1) && (score <= 5)) {
      const body = {
          name: (name == "") ? undefined : name,
          content: reviewText,
          score: score,
          date: getCurrentDate(),
          targetProviderUserName: usernameProvider,
        }
      const url = `${serverBaseUrl}/reviews`;
      console.log(body);
      const response = await sendRequest(url, 'POST', body);
      if(!response.ok) {
          console.log("Create review Failed !");
      } else {
          // Fetch succeeded
          console.log("Create review Created !");
          setReviewText('');
          setRating('');
          setName('');
          props.route.params.setNeedToFatch(true);
          props.navigation.navigate('Reviews', {
            usernameProvider: usernameProvider,
            nameProvider: nameProvider,
          });
      }
  }

    // Reset form fields after submission
    setReviewText('');
    setRating('');
    setName('');
  };


  if (!fontsLoaded) {
    return <AppLoading />;
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a Review</Text>
      <Text style={styles.subtitle}>Tell us about your experience</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your review..."
        value={reviewText}
        onChangeText={handleReviewTextChange}
        multiline
      />
      <TextInput
        style={styles.ratingInput}
        placeholder="Rating (1-5)"
        value={rating}
        onChangeText={handleRatingChange}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.nameInput}
        placeholder="You can choose name..."
        value={name}
        onChangeText={handleNameChange}
      />
      <TouchableOpacity style={{width: "50%", backgroundColor: "#4FA4E5", padding: 10, borderRadius: 20, alignSelf: "center", alignItems: "center"}} onPress={handleSubmitReview} >
        <Text style ={{color: "#FFF", fontSize: 18, fontWeight: "500"}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: "Montserrat_600SemiBold_Italic",
    color: "#454545",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: "Montserrat_500Medium_Italic",
    color: "#454545",
  },
  input: {
    height: 180,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    padding: 30,
    fontSize: 17,
    backgroundColor: '#fff',
    borderRadius: 40,
    width: "80%",
    alignSelf: "center",
    elevation: 20,
  },
  ratingInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 0.5,
    marginBottom: 20,
    width: "75%",
    paddingLeft: 30,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignSelf: "center",
    elevation: 10,
  },
  nameInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 0.5,
    marginBottom: 40,
    width: "75%",
    paddingLeft: 30,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignSelf: "center",
    elevation: 10,
  },
});

export default AddReview;
