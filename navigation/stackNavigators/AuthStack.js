import React,{useState,useEffect} from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import OnboardingScreen from "../../screens/OnboardingScreen"
import LoginScreen from "../../screens/LoginScreen"
import SignupScreen from "../../screens/SignUpScreen"
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
  routeName = "Onboard"
}
else{
  routeName = "Login"
}
 

const Stack = createStackNavigator()

//To enable onboarding functionality on first startup change the initial route to {routeName}
//To always show onboarding screen, change initialRoute to 'onboard'
  return (
      <Stack.Navigator  initialRouteName="Onboard">
            <Stack.Screen options={{headerShown:false}} name="Onboard" component={OnboardingScreen} />
            <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
            <Stack.Screen options={({navigation})=>({
              title:'',
              headerStyle:{
                elevation:0,
                backgroundColor:"#f9fafd"
              }
            })} name="Signup" component={SignupScreen} />
        </Stack.Navigator>      
  );
}

export default AuthStack;