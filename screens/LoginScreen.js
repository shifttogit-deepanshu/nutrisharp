import React, {useContext, useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {auth} from "../firebase/firebase"
import * as Google from 'expo-google-app-auth';
import * as firebase from "firebase"


const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [error,setError] = useState(null)
  const [isLoading,setIsLoading] = useState(false)

  const handleSignIn = (email,password)=>{

    
    setError(null)
    setIsLoading(true)
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {

      return setIsLoading(false)
      
  }).catch((error) => {
    console.log(error)
    setError(error.message)
    return setIsLoading(false)
  });
  }


const handleFBLogin = ()=>{

}

const onSignIn = (googleUser)=> {
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,googleUser.accessToken
          );

      // Sign in with credential from the Google user.
      auth.signInWithCredential(credential).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
   
  });
}

const signInWithGoogleAsync = async ()=> {
  try {
    const result = await Google.logInAsync({
      androidClientId: '558960443244-lsjb2pduuv1tm3qql3j3q7rkl5u1prat.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      onSignIn(result)
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

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

      {isLoading ? <ActivityIndicator size="large" color="#2e64e5" />:<FormButton
      buttonTitle="Sign In"
      buttonColor="#2e64e5"
      onPress={() => handleSignIn(email,password)}
    /> }
     
        
      
      

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
            onPress={() => handleFBLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => signInWithGoogleAsync()}
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