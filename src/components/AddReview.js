import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
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

const AddReview = () => {

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

  const handleReviewTextChange = (text) => {
    setReviewText(text);
  };

  const handleRatingChange = (text) => {
    setRating(text);
  };

  const handleSubmitReview = () => {
    // Perform necessary actions with the review data, such as sending it to a server or storing it locally
    console.log('Review submitted:', reviewText, rating);

    // Reset form fields after submission
    setReviewText('');
    setRating('');
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
        placeholder="Enter your review"
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
