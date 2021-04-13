import React,{useState,useEffect} from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from "../../screens/OnboardingScreen"
import LoginScreen from "../../screens/LoginScreen"
import AsyncStorage from '@react-native-async-storage/async-storage'



const AuthStack=()=> {

//logic to show onboarding screen only on first startup of the app.

const [isFirstLaunch,setIsFirstLaunch] = useState(null)

let routeName
useEffect(()=>{
  AsyncStorage.getItem('alreadyLaunched').then(value=>{
    if(value==null){
      AsyncStorage.setItem('alreadyLaunched','true')
      setIsFirstLaunch(true)
    }
    else{
      setIsFirstLaunch(false)
    }
  })
},[])


if(isFirstLaunch==null){
  return null
}else if(isFirstLaunch==true){
  routeName = "onboard"
}
else{
  routeName = "loginpage"
}
 

const Stack = createStackNavigator()

//To enable onboarding functionality on first startup change the initial route to {routename}
//To always show onboarding screen, change initialRoute to 'onboard'
  return (
        <Stack.Navigator  initialRouteName={routeName}>
            <Stack.Screen options={{headerShown:false}} name="onboard" component={OnboardingScreen} />
            <Stack.Screen options={{headerShown:false}} name="loginpage" component={LoginScreen} />
        </Stack.Navigator>      
  );
}

export default AuthStack;