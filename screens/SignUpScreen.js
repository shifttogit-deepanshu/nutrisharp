import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet,Alert,ActivityIndicator} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {auth} from "../firebase/firebase"

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [error,setError] = useState(null)
  const [isLoading,setIsLoading] = useState(false)

  const handleSubmit = (email, password,confirmPassword)=>{
    setError(null)
    setIsLoading(true)
    if(password!=confirmPassword){
      setIsLoading(false)
        return setError('password did not match')
    }
    auth.createUserWithEmailAndPassword(email,password).then(userCredential=>{
      
        return setIsLoading(false)
    }).catch(e=>{
        console.log(e)
        setError(e.message)
        setIsLoading(false)
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
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

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
        colorBorder="#ccc"
      />

      {isLoading ? <ActivityIndicator size="large" color="#2e64e5" />:<FormButton
        buttonTitle="Sign Up"
        onPress={() => handleSubmit(email, password,confirmPassword)}
        buttonColor="#2e64e5"
      />}

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#f9fafd",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: 28,
    fontWeight:'bold',
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});