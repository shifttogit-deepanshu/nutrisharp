import React from 'react'
import { View, Text } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from "../screens/OnboardingScreen"
import LoginScreen from "../screens/LoginScreen"




const Navigator=()=> {

const Stack = createStackNavigator()


  return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="onboard">
            <Stack.Screen options={{headerShown:false}} name="onboard" component={OnboardingScreen} />
            <Stack.Screen name="loginpage" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      
  );
}

export default Navigator;