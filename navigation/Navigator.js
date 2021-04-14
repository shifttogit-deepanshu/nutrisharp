import React from "react"
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import Routes from "./Routes"


const Navigator = ()=>{
      let [fontsLoaded] = useFonts({
        'Lato-Regular': require('../fonts/Lato-Regular.ttf'),
        'Kafum-SemiBoldItalic': require('../fonts/Kufam-SemiBoldItalic.ttf')
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } 
      else {
    
        return <Routes />
      }
}

export default Navigator