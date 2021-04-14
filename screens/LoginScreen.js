import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [error,setError] = useState(null)

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Image
      source={require('../assets/images/logo.png')}
      style={styles.logo}
    />
      <Text style={styles.text}>NUTRISHARP</Text>
      {error && Alert.alert('Error!',error, [
        {
          text: "Cancel",
          onPress: () => setError(null),
          style: "cancel"
        }
      ])}
      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        colorBorder="#ccc"
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
        colorBorder="#ccc"
      />

      <FormButton
        buttonTitle="Sign In"
        buttonColor="#2e64e5"
        onPress={() => {setError('Unable to Sign In!')}}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#f9fafd",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize:20,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 14,
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});