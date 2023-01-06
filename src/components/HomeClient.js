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
            <Text style= {[{fontSize: 25}, {textAlign: 'center'}, {fontWeight: 'bold'}, {color: '#3A59FF',}]}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.login} onPress={onPressLogin}>
            <Text style= {[{fontSize: 25}, {textAlign: 'center'}, {fontWeight: 'bold'}, {color: 'white',}]}>Log In</Text>
          </TouchableOpacity>
        </View>
    );
  }

  export default HomeProvider


  const styles = StyleSheet.create({
    signup: {
      backgroundColor: 'white',
      width: "65%",
      borderRadius: 25,
      marginLeft: '19%',
      padding: "1%",
      top: 60,
    },
    login: {
      backgroundColor: '#3A59FF',
      width: "65%",
      borderRadius: 25,
      marginLeft: '19%',
      padding: "1%",
      top: 100,
    },
  });