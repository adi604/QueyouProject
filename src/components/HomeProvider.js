import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const HomeProvider = props => {
    
    const onPressLogin = () => {
        props.navigation.navigate('LoginScreen');
    };

    const onPressSignUp = () => {
        props.navigation.navigate('SignUpScreen');
    };


    return (
      <View>
      <TouchableOpacity style={styles.signup} onPress={onPressSignUp}>
        <Text style= {[{fontSize: 20}, {textAlign: 'center'}, {fontWeight: 'bold'}, {color: 'black'}, {letterSpacing: 1}]}>Sign Up Provider</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login} onPress={onPressLogin}>
        <Text style= {[{fontSize: 20}, {textAlign: 'center'}, {fontWeight: 'bold'}, {color: 'white'}, {letterSpacing: 1}]}>Log In Provider</Text>
      </TouchableOpacity>
    </View>
    );
  }

  export default HomeProvider


  const styles = StyleSheet.create({
    signup: {
      backgroundColor: 'white',
      width: "55%",
      height: "25%",
      borderRadius: 25,
      marginLeft: '19%',
      padding: "1%",
      top: 40,
      left: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 10,
    },
    login: {
      backgroundColor: '#9370db',
      width: "55%",
      height: "25%",
      borderRadius: 25,
      marginLeft: '19%',
      padding: "1%",
      top: 70,
      left: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 10,
    },
  });