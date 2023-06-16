import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const HomeProvider = props => {

  const onPressLogin = () => {
    props.navigation.navigate('PrLoginScreen');
  };

  const onPressSignUp = () => {
    props.navigation.navigate('PrSignUpScreen');
  };


  return (
    <View style={{ height: '100%' }}>
      <TouchableOpacity style={styles.signup} onPress={onPressSignUp}>
        <Text style={[{ fontSize: 20 }, { textAlign: 'center' }, { fontWeight: 'bold' }, { color: 'black' }]}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login} onPress={onPressLogin}>
        <Text style={[{ fontSize: 20 }, { textAlign: 'center' }, { fontWeight: 'bold' }, { color: 'white' }]}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeProvider


const styles = StyleSheet.create({
  signup: {
    backgroundColor: 'white',
    width: "55%",
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    shadowColor: "#000",
    elevation: 10,
    alignSelf:"center",
    justifyContent:"center",
  },
  login: {
    backgroundColor: '#4FA4E5',
    width: "55%",
    height: 50,
    marginTop: 40,
    borderRadius: 25,
    shadowColor: "#000",
    elevation: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
});